
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({ position, geometry }: { position: [number, number, number], geometry: 'sphere' | 'box' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position} />;
      case 'box':
        return <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={position} />;
      case 'torus':
        return <Torus ref={meshRef} args={[0.5, 0.2, 16, 100]} position={position} />;
      default:
        return <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position} />;
    }
  };

  return (
    <mesh>
      {renderGeometry()}
      <meshStandardMaterial
        color="#8B5CF6"
        transparent
        opacity={0.8}
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A855F7" />
        
        <FloatingGeometry position={[-2, 0, 0]} geometry="sphere" />
        <FloatingGeometry position={[0, 0, 0]} geometry="box" />
        <FloatingGeometry position={[2, 0, 0]} geometry="torus" />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
