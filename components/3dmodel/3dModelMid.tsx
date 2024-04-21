import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../../lib/model";
import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";
const easeOutCirc = (x: number): number => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

interface Props {
  children?: React.ReactNode;
}

const ModelViewerMid: React.FC<Props> = () => {
  const refContainer = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null);
  const modelUrl = "/models/gameboy_advance_-_zelda_concept.glb";

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

      const target = new THREE.Vector3(0, 1.2, 0);
      const initialCameraPosition = new THREE.Vector3(0, 10, 20);

      const scale = 2;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        1,
        1000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = -2;
      controls.target.copy(target);

      loadGLTFModel(scene, modelUrl, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      return () => {
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

  return <ModelContainer ref={refContainer}></ModelContainer>;
};

export default ModelViewerMid;

const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);
interface DogContainerProps {
  children?: React.ReactNode;
}
const ModelContainer = forwardRef<HTMLDivElement, DogContainerProps>(
  ({ children }, ref) => (
    <Box
      ref={ref}
      m="auto"
      mt={["-250px", "-250px", "-320px"]}
      mb={["-40px", "-40px", "-40px"]}
      w={[180, 480, 540]}
      h={[380, 480, 540]}
      position="relative"
      zIndex="0"
    >
      {children}
    </Box>
  )
);

const Loader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
};
