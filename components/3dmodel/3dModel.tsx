import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../../lib/model";
import { ModelSpinner, ModelContainer } from "./ModelLoader";
const easeOutCirc = (x: number): number => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

interface Props {
  children?: React.ReactNode;
}

const ModelViewer: React.FC<Props> = () => {
  const refContainer = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null);
  const modelUrl = "/models/pokemon_firered_-_players_room.glb";

  const handleWindowResize = useCallback(() => {
    const renderer = refRenderer.current;
    const container = refContainer.current;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      renderer.setSize(scW, scH);
    }
  }, []);

  useEffect(() => {
    const container = refContainer.current;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;

      const scene = new THREE.Scene();
      const target = new THREE.Vector3(-0.5, 1.2, 0);
      const initialCameraPosition = new THREE.Vector3(
        -20 * Math.sin(Math.PI * 2),
        40,
        100 * Math.cos(Math.PI * 2)
      );

      const scale = scH * 0.005 + 5.5;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = -2;
      controls.target = target;

      loadGLTFModel(scene, modelUrl, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req: number | null = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        if (frame <= 100) {
          const factor = easeOutCirc(frame / 100);
          const angle = Math.PI * 2 * factor; // Full rotation over 100 frames
          camera.position.x = 70 * Math.sin(angle);
          camera.position.z = 70 * Math.cos(angle);
          camera.lookAt(target);
          frame++;
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        if (req !== null) {
          cancelAnimationFrame(req);
        }
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <ModelContainer ref={refContainer}>
      {loading && <ModelSpinner />}
    </ModelContainer>
  );
};

export default ModelViewer;
