import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Viewport {
  constructor(scene) {
    this.scene = scene;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.frustrum = 2;
    this.camera = this.createOrthogoraphicCamera();
    this.camera.position.z = 5;
    this.camera.position.y = 6;
    this.camera.position.x = -5;


    const size = 10;
    const division = 10;
    const gridhelper = new THREE.GridHelper(size, division);
   // this.scene.add(gridhelper);

    let controls = new OrbitControls(this.camera, this.renderer.domElement);
  
    controls.target = new THREE.Vector3(0, 1.5, 0);
    controls.update();

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.renderer.setClearColor(0xfbf8cc, 1);
    //this.renderer.setClearColor(0x000000, 1);
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    //this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.75;

    this.renderer.domElement.style = "display: block;";
    this.renderer.physicallyCorrectLights = false;
    this.renderer.shadowMap.renderSingleSided = false;
    this.renderer.shadowMap.renderReverseSided = true;

    const element = document.getElementById("ThreeScene");
    element.appendChild(this.renderer.domElement);

    window.addEventListener("resize", this.windowResized.bind(this), false);
  }

  createPerpesticCamera() {
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    return camera;
  }

  createOrthogoraphicCamera() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    this.aspect = window.innerWidth / window.innerHeight;

    let viewSize = 7;

    let viewport = {
      left: (-this.aspect * viewSize) / 2,
      right: (this.aspect * viewSize) / 2,
      top: viewSize / 2,
      bottom: -viewSize / 2,
      near: -100,
      far: 100,
    };

    let camera = new THREE.OrthographicCamera(
      viewport.left,
      viewport.right,
      viewport.top,
      viewport.bottom,
      viewport.near,
      viewport.far
    );

    return camera;
  }

  windowResized() {
    let size = new THREE.Vector2();
    this.renderer.getSize(size);

   
    this.aspect = window.innerWidth / window.innerHeight;
    let viewSize = 7;
    if (this.camera != undefined) {

      this.camera.left = (-this.aspect * viewSize) / 2;
      this.camera.right = (this.aspect * viewSize) / 2;

      this.camera.aspect = this.aspect;
      this.camera.updateProjectionMatrix();
    }
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
  }

  render(scene) {
    this.renderer.render(scene, this.camera);
  }
}
