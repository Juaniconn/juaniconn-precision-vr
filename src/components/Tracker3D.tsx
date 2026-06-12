import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, useGLTF, Center, Bounds } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import trackerAsset from "@/assets/models/tracker.glb.asset.json";

const MODEL_URL = trackerAsset.url;

useGLTF.preload(MODEL_URL);

function Model() {
  const group = useRef<THREE.Group>(null!);
  const { scene } = useGLTF(MODEL_URL);

  // Apply subtle metallic reflection while preserving original materials
  scene.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (mesh.isMesh) {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      const mat = mesh.material as THREE.MeshStandardMaterial | THREE.MeshStandardMaterial[];
      const apply = (m: THREE.MeshStandardMaterial) => {
        if ("metalness" in m) {
          m.metalness = Math.max(m.metalness ?? 0, 0.45);
          m.roughness = Math.min(m.roughness ?? 1, 0.55);
          m.envMapIntensity = 1.1;
          m.needsUpdate = true;
        }
      };
      Array.isArray(mat) ? mat.forEach(apply) : apply(mat);
    }
  });

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.35; // slow auto-rotate
    }
  });

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

export const Tracker3D = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.6, 4], fov: 35 }}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#FF9D00" />
      <spotLight position={[0, 4, 3]} intensity={0.7} angle={0.6} penumbra={1} color="#FFB347" />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.15}>
          <Model />
        </Bounds>
        <ContactShadows position={[0, -1.3, 0]} opacity={0.45} blur={2.8} far={3.5} scale={6} color="#FF9D00" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};
