import * as THREE from "three";
import { Vector3 } from "three";
import img from "../../texture/monitor texture.png";

export default class Monitor {
  constructor(child) {
    // let geometry = new THREE.PlaneGeometry(1, 1);


    let texloader = new THREE.TextureLoader();
    this.texture = texloader.load(img, function (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.offset.set(0.15, 0);
      texture.repeat.set(4.2, 1);
      texture.encoding = THREE.sRGBEncoding;
      texture.rotation = Math.PI*3/2
    });

    this.texture.offset.set(0, 0);

    let planematerial = new THREE.MeshBasicMaterial({
      map: this.texture,
    });
    planematerial.emissiveIntensity = 0;

   child.material = planematerial
  }

  //this.obj = new THREE.Mesh(geometry, planematerial);
  // this.obj.rotation.set(
  //   (180 / 180) * Math.PI,
  //   (-89 / 180) * Math.PI,
  //   (180 / 180) * Math.PI
  // );
  // this.obj.position.set(1.592, 1.2, 0.379);
  // this.obj.scale.set(0.801, 0.44, 0.584);
  //this.obj.position.set(new Vector3(0,0,0))
  // this.obj.rotation.set(new Vector3(180,-89,180))
  // this.obj.scale.set(new Vector3(0.801,0.440,0.584));

  animate() {
    
    this.texture.offset.y -= 0.005;
  }
}
