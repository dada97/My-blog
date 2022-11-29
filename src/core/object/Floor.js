import * as THREE from "three";

export default class Floor {
  constructor(scene) {
    this.scene = scene;
    this.setFloor();
  }

  setFloor() {
    let geometry = new THREE.PlaneGeometry(100, 100);
    let material = new THREE.ShadowMaterial
    material.opacity = 0.2
    // ({
    //   color: 0xff0000,
    //   opacity:0,
    //   transparent: true,

    //   //side	: THREE.DoubleSide,
    // });

    this.plane = new THREE.Mesh(geometry, material);
    this.plane.castShadow = true;
    this.plane.receiveShadow = true;

    this.plane.position.y = -0.5;
    this.plane.rotation.set((Math.PI * 3) / 2, 0, 0);
    this.scene.add(this.plane);
  }
}
