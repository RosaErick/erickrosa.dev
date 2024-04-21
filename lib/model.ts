import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'; // Adjust path if necessary

import * as THREE from 'three';

interface LoadModelOptions {
  receiveShadow?: boolean;
  castShadow?: boolean;
}

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: 'js' });
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

export function loadGLTFModel(
  scene: THREE.Scene,
  glbPath: string,
  options: LoadModelOptions = { receiveShadow: true, castShadow: true }
): Promise<THREE.Object3D> {
  const { receiveShadow = true, castShadow = true } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco);

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = 'dog';
        obj.position.set(0, 0, 0); // Simplified positioning
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      (error) => reject(error)
    );
  });
}
