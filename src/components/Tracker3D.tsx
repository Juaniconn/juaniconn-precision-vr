import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, RoundedBox, Edges } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Tracker() {
  const group = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.6;
      group.current.rotation.x = Math.sin(performance.now() * 0.0005) * 0.15;
    }
  });

  return (
    <group ref={group}>
      {/* Main body */}
      <RoundedBox args={[1.6, 1.6, 0.55]} radius={0.12} smoothness={6} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#0a0a0a"
          metalness={0.7}
          roughness={0.35}
          clearcoat={0.9}
          clearcoatRoughness={0.15}
        />
        <Edges threshold={15} color="#FF9D00" />
      </RoundedBox>

      {/* Front face plate */}
      <mesh position={[0, 0, 0.281]}>
        <planeGeometry args={[1.35, 1.35]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.4}
          roughness={0.55}
          emissive="#FF9D00"
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Bee logo - simplified hexagon */}
      <mesh position={[0, 0, 0.29]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.42, 0.42, 0.02, 6]} />
        <meshStandardMaterial
          color="#FF9D00"
          emissive="#FF9D00"
          emissiveIntensity={1.2}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 0, 0.305]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.28, 0.04, 12, 32]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>

      {/* LED indicator */}
      <mesh position={[0.55, -0.55, 0.29]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshStandardMaterial
          color="#FF9D00"
          emissive="#FF9D00"
          emissiveIntensity={3}
        />
      </mesh>
      <pointLight position={[0.55, -0.55, 0.35]} intensity={0.5} color="#FF9D00" distance={0.6} />

      {/* USB-C port */}
      <mesh position={[0, -0.82, 0]}>
        <boxGeometry args={[0.35, 0.08, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Side accent stripes */}
      <mesh position={[0.81, 0, 0]}>
        <planeGeometry args={[0.55, 1.4]} />
        <meshStandardMaterial color="#FF9D00" emissive="#FF9D00" emissiveIntensity={0.4} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export const Tracker3D = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.4, 4], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.3} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.6} color="#FF9D00" />
      <spotLight position={[0, 4, 3]} intensity={0.8} angle={0.6} penumbra={1} color="#FFB347" />

      <Suspense fallback={null}>
        <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.5}>
          <Tracker />
        </Float>
        <ContactShadows position={[0, -1.3, 0]} opacity={0.5} blur={2.5} far={3} scale={5} color="#FF9D00" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};
