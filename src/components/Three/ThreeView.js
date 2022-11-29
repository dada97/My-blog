import * as THREE from "three";

import Viewport from "../../core/base/Viewport";

import ObjectManager from "../../core/base/ObjectManager";
import Global from "../../core/base/Global";

import { GUI } from "dat.gui";

export default class ThreeView {
  constructor() {


    this.scene = Global.inst.scene;
    //this.scene = new THREE.Scene();
    this.viewport = new Viewport(this.scene);
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(-10, 25, 20);
    hemiLight.intensity=0.5
    this.scene.add(hemiLight);

    this.dirLight = new THREE.DirectionalLight(0xffffff);
    this.dirLight.position.set(-1, 5, 1);
    //this.dirLight.position.set(-5, 5, 1);
    this.dirLight.castShadow = true;
    

    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 500;
    //dirLight.shadow.camera.near = 0.0;
    this.dirLight.shadow.bias = -0.0004;
    //const helper = new THREE.DirectionalLightHelper(this.dirLight, 5);

    // dirLight.shadow.camera.top = 2;
    // dirLight.shadow.camera.bottom = - 2;
    // dirLight.shadow.camera.left = - 2;
    // dirLight.shadow.camera.right = 2;
    // dirLight.shadow.camera.near = 0.1;
    // dirLight.shadow.camera.far = 10;

    this.scene.add(this.dirLight);

    this.objectManager = new ObjectManager(this.scene);

    //this.scene.add(amblight)
    //this.scene.add(helper);
    //let controls = new OrbitControls(this.camera, this.renderer.domElement);
    //this.scene.add(directionalLight);
    //this.scene.add(light);

    // const gui = new GUI();
    // this.data = {
    //   x: -1,
    //   y: 5,
    //   z: 1,
    // };

    // gui.add(this.data, "x", -5, 5, 0.1);
    // gui.add(this.data, "y", -5, 5, 0.1);
    // gui.add(this.data, "z", -5, 5, 0.1);

    this.animate();
  }

  animate(t) {
    // this.dirLight.position.set(this.data.x, this.data.y, this.data.z);
    requestAnimationFrame(this.animate.bind(this));
    this.viewport.render(this.scene);
    this.objectManager.animate();
  }
}
