import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import path from "../../model/Arama.glb";

export default class Arama {
  constructor(scene) {
    let loader = new GLTFLoader();
    this.height = 1.0;
    this.flyingfactor = 0;
    this.flyheight = 0.06;

    loader.load(
      path,
      (gltf) => {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true
                child.receiveShadow = true

      
            }
        })

        this.head = gltf.scene.children[1];
        this.obj = gltf.scene;
        this.obj.scale.set(0.05, 0.05, 0.05);
        this.obj.rotation.set(0.0, (270 / 180) * Math.PI, 0.0);
        this.obj.position.set(1.0, this.height, 0.9);
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
   
        console.error(error);
      }
    );
  }

  animate(t) {
    if (this.head != undefined) {
      this.head.rotation.y += 0.1;
      this.flyingfactor = (this.flyingfactor + 1) % 360;
      this.obj.position.y =
        this.height +
        Math.sin((this.flyingfactor / 180) * Math.PI) * this.flyheight;
    }
  }
}
