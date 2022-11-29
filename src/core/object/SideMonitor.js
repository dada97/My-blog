import * as THREE from "three";
import { Vector3 } from "three";
import img from "../../texture/longimage.png";

export default class SideMonitor {
  constructor(child) {
    //let geometry = new THREE.PlaneGeometry(1, 1);

    let texloader = new THREE.TextureLoader();
    this.texture = texloader.load(img, function (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.offset.set(0.0, 1.1);
      texture.repeat.set(1.5, 3.0);
      texture.encoding = THREE.sRGBEncoding;
      texture.rotation = Math.PI*3/2
    });

    this.texture.offset.set(0, 0);

    let planematerial = new THREE.MeshBasicMaterial({
      map: this.texture,
    });
    planematerial.emissiveIntensity = 0;

    child.material = planematerial
    //this.obj = new THREE.Mesh(geometry, planematerial);
    // this.obj.rotation.set(
    //   (180 / 180) * Math.PI,
    //   (-141 / 180) * Math.PI,
    //   (180 / 180) * Math.PI
    // );
    // this.obj.position.set(1.287, 1.2, -0.341);
    // this.obj.scale.set(0.801, 0.44, 0.584);
    //this.obj.position.set(new Vector3(0,0,0))
    // this.obj.rotation.set(new Vector3(180,-89,180))
    // this.obj.scale.set(new Vector3(0.801,0.440,0.584));
  }

  animate() {
    this.texture.offset.x += 0.001;
  }
}
