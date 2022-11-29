import * as THREE from "three";
import { GUI } from "dat.gui";

export default class Galaxy {
  constructor(scene) {
    this.scene = scene;
    this.parameters = {
      count: 7800,
      size: 0.013,
      radius: 5.819,
      branches: 3,
      spin: 1,
      randomness: 0.234,
      randomnessPower: 2.1527,
      insideColor: "#ff6030",
      midColor: "#9911c3",
      outsideColor: "#1b3984",
    };

    this.generanteStencil();
    this.generatorGalaxy();

    // const gui = new GUI();
    
    // gui
    //   .add(this.parameters, "count", 100, 20000, 100)
    //   .listen()
    //   .onFinishChange(
    //     function () {
    //       this.generatorGalaxy();
    //     }.bind(this)
    //   );
    // //.onFinishChange("Finish!"); //this.generatorGalaxy());
    // gui
    //   .add(this.parameters, "size", 0.001, 1, 0.001)
    //   .listen()
    //   .onFinishChange(
    //     function () {
    //       this.generatorGalaxy();
    //     }.bind(this)
    //   );
    // gui
    //   .add(this.parameters, "radius", 0.01, 20, 0.001)
    //   .listen()
    //   .onFinishChange(
    //     function () {
    //       this.generatorGalaxy();
    //     }.bind(this)
    //   );
    // gui
    //   .add(this.parameters, "branches", 2, 20, 1)
    //   .listen()
    //   .onFinishChange(
    //     function () {
    //       this.generatorGalaxy();
    //     }.bind(this)
    //   );
    // gui
    //   .add(this.parameters, "spin", -5, 5, 0.001)
    //   .listen()
    //   .onFinishChange(
    //     function () {
    //       this.generatorGalaxy();
    //     }.bind(this)
    //   );
    // gui
    //   .add(this.parameters, "randomness", 0, 2, 0.001)
    //   .listen()
    //   .onFinishChange(
    //     function () {
    //       this.generatorGalaxy();
    //     }.bind(this)
    //   );
    // gui
    //   .add(this.parameters, "randomnessPower", 1, 10, 0.0011)
    //   .listen()
    //   .onFinishChange(
    //     function () {
    //       this.generatorGalaxy();
    //     }.bind(this)
    //   );
    // gui
    //   .addColor(this.parameters, "insideColor")
    //   .listen()
    //   .onFinishChange(
    //     function () {
    //       this.generatorGalaxy();
    //     }.bind(this)
    //   );
    // gui
    //   .addColor(this.parameters, "outsideColor")
    //   .listen()
    //   .onFinishChange(
    //     function () {
    //       this.generatorGalaxy();
    //     }.bind(this)
    //   );

    // gui
    //   .addColor(this.parameters, "midColor")
    //   .listen()
    //   .onFinishChange(
    //     function () {
    //       this.generatorGalaxy();
    //     }.bind(this)
    //   );
    //.onFinishChange(this.generatorGalaxy());
  }

  generatorGalaxy() {
    if (this.obj) {
      this.insideGroup.remove(this.obj);

      this.geometry.dispose();
      this.material.dispose();
      this.scene.remove(this.points);
      this.scene.remove(this.obj);
    }
    //geometry
    this.geometry = new THREE.BufferGeometry();
    const position = new Float32Array(this.parameters.count * 3);
    const colors = new Float32Array(this.parameters.count * 3);
    for (let i = 0; i < this.parameters.count; i += 1) {
      const i3 = i * 3;
      const radius = Math.random() * this.parameters.radius;
      const branchesAngles =
        ((i % this.parameters.branches) / this.parameters.branches) *
        Math.PI *
        2;
      const spinAngle = radius * this.parameters.spin;

      const randomX =
        Math.random() ** this.parameters.randomnessPower *
        (Math.random() < 0.5 ? 1 : -1) *
        this.parameters.randomness *
        radius;

      const randomY =
        Math.random() ** this.parameters.randomnessPower *
        (Math.random() < 0.5 ? 1 : -1) *
        this.parameters.randomness *
        radius;

      const randomZ =
        Math.random() ** this.parameters.randomnessPower *
        (Math.random() < 0.5 ? 1 : -1) *
        this.parameters.randomness *
        radius;

      position[i3] = Math.cos(branchesAngles + spinAngle) * radius + randomX;
      position[i3 + 1] = randomY;
      position[i3 + 2] =
        Math.sin(branchesAngles + spinAngle) * radius + randomZ;

      const colorInside = new THREE.Color(this.parameters.insideColor);
      const colorOutside = new THREE.Color(this.parameters.outsideColor);
      const colorMiddle = new THREE.Color(this.parameters.midColor);
      let mixedColor;

      if (radius / this.parameters.radius < 0.5) {
        mixedColor = colorInside.clone();
        mixedColor.lerp(colorMiddle, radius / (this.parameters.radius / 2));
        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
      } else {
        let mixedColor = colorMiddle.clone();

        mixedColor.lerp(
          colorOutside,
          radius / (this.parameters.radius / 2) - 1
        );

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
      }
    }

    this.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(position, 3)
    );
    this.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    this.material = new THREE.PointsMaterial({
      size: this.parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      stencilWrite: true,
      stencilFunc: THREE.EqualStencilFunc,
      stencilRef: 1,
      stencilFuncMask: 0xff,
      stencilFail: THREE.KeepStencilOp,
      stencilZFail: THREE.KeepStencilOp,
      stencilZPass: THREE.ReplaceStencilOp,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.renderOrder = 1000;

    this.obj = new THREE.Object3D();
    this.obj.add(this.points);

    this.obj.scale.set(0.25, 0.25, 0.25);
    this.obj.rotation.set((30 / 180) * Math.PI, 0, (-10 / 180) * Math.PI);
    this.obj.position.set(0.2, 1.5, -2.0);
    this.insideGroup.add(this.obj);
  }

  generanteStencil() {
    let cloakGroup = new THREE.Group();
    this.insideGroup = new THREE.Group();

    cloakGroup.renderOrder = 1;
    this.scene.add(cloakGroup);
    this.insideGroup.renderOrder = 2;
    this.scene.add(this.insideGroup);

    let cloakMaterial = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      side: THREE.FrontSide,
      colorWrite: false,
      depthWrite: false,
      stencilWrite: true,
      stencilFunc: THREE.AlwaysStencilFunc,
      stencilRef: 1,
      stencilFuncMask: 0xff,
      stencilFail: THREE.KeepStencilOp,
      stencilZFail: THREE.KeepStencilOp,
      stencilZPass: THREE.ReplaceStencilOp,
    });
    const cloakPortal = new THREE.Mesh(
      new THREE.CircleGeometry(1, 30),
      cloakMaterial
    );

    const sphereBackground = new THREE.Mesh(
      new THREE.SphereGeometry(50, 50, 50),
      new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        stencilWrite: true,
        stencilFunc: THREE.EqualStencilFunc,
        stencilRef: 1,
        stencilFuncMask: 0xff,
        stencilFail: THREE.KeepStencilOp,
        stencilZFail: THREE.KeepStencilOp,
        stencilZPass: THREE.ReplaceStencilOp,
        color: 0x000000,
      })
    );

    this.insideGroup.add(sphereBackground);

    cloakPortal.position.set(0, 1.5, -1.4);
    cloakPortal.renderOrder = 1;
    cloakGroup.add(cloakPortal);

    let testCube = new THREE.Mesh(
      new THREE.BoxGeometry(4, 4, 4),
      new THREE.MeshNormalMaterial({
        stencilWrite: true,
        stencilFunc: THREE.EqualStencilFunc,
        stencilRef: 1,
        stencilFuncMask: 0xff,
        stencilFail: THREE.KeepStencilOp,
        stencilZFail: THREE.KeepStencilOp,
        stencilZPass: THREE.ReplaceStencilOp,
      })
    );
    testCube.position.set(0, 0, -3);
    //insideGroup.add(testCube);

    const backpanel = new THREE.Mesh(
      new THREE.CircleGeometry(1, 30),
      new THREE.MeshBasicMaterial({ color: 0x6090ff, side: THREE.BackSide,
        opacity: 0.5,
        transparent: true,})
    );
    backpanel.position.set(0, 1.5, -1.3);
    cloakGroup.add(backpanel);
  }

  animate() {
    this.points.rotation.y += 0.003;
  }
}
