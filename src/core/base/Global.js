import * as THREE from "three";

export default class Global {
  static get inst() {
    if (Global.instance == null) {
    
      Global.instance = new Global();
      Global.instance.scene = new THREE.Scene();
    }
    return Global.instance;
  }
}
