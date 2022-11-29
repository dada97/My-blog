import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Arama from "../object/Arama";
import Galaxy from "../object/Galaxy";
import model from "../../model/room.glb";

import Floor from "../object/Floor";
import Room from "../object/Room";

export default class ObjectManager {
  constructor(scene) {
    //load Object to scene
    this.scene = scene;
    this.loader = new GLTFLoader();

   
    //this.scene.add(this.arama);
    //this.scene.add(this.galaxy);
    //this.scene.add(this.roomModel);

    this.loadRoomModel();

  
  }

  async loadRoomModel() {
    this.roomModel = new Room(await this.loadModelGLB(model));

    this.scene.add(this.roomModel.object);
    this.arama = new Arama( this.roomModel.object);
    this.galaxy = new Galaxy(this.roomModel.object);
    this.floor = new Floor(this.roomModel.object)
    //this.setMonitorScene();
  }

  async loadModelGLB(path, onProgress) {
    const gltf = await this.loader.loadAsync(
      path,
      onProgress ? onProgress : null
    );

    return gltf.scene;
  }

  setMonitorScene() {
    // console.log(this.roomModel);
    // this.roomModel.traverse(
    //   function (child) {
    //     if (child.name == "screen_R") {
    //       this.monitor = new Monitor(child);
    //     }
    //     if (child.name == "screen_L") {
    //       this.monitor2 = new SideMonitor(child);
    //     }
    //     if (child.isMesh) {
    //       child.castShadow = true;
    //       child.receiveShadow = true;
    //     }
    //   }.bind(this)
    // );
  }

  animate(t) {
    if(this.roomModel) this.roomModel.animate();
    if(this.arama) this.arama.animate();
    if(this.galaxy) this.galaxy.animate();
  }
}
