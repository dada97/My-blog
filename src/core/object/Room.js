import * as THREE from "three";
import GSAP from "gsap";
import Monitor from "../../core/object/Monitor";
import SideMonitor from "../../core/object/SideMonitor";

export default class Room {
  constructor(model) {
    this.object = model;
    this.setMonitorScreen();

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.lerp2 = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.onMouseMove();
  }

  setMonitorScreen() {

    this.object.traverse(
      function (child) {
        if (child.name == "screen_R") {
          this.monitor = new Monitor(child);
        }
        if (child.name == "screen_L") {
          this.monitor2 = new SideMonitor(child);
        }
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      }.bind(this)
    );
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;

      this.lerp.target = this.rotation * 0.5;

      this.Vrotation =
        ((e.clientY - window.innerHeight / 2) * 2) / window.innerHeight;
      this.lerp2.target = this.Vrotation * 0.08;

    });
  }

  animate(t) {
    if (this.monitor) this.monitor.animate();
    if (this.monitor) this.monitor2.animate();
    this.lerp.current = GSAP.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );

    this.lerp2.current = GSAP.utils.interpolate(
      this.lerp2.current,
      this.lerp2.target,
      this.lerp2.ease
    );

    this.object.rotation.y = this.lerp.current;
    this.object.rotation.x = this.lerp2.current;
    this.object.rotation.z = this.lerp2.current;
  }
}
