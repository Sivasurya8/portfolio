import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/face.glb');
  const modelRef = useRef<THREE.Group>(null);

  // Traverse the scene and modify materials if needed
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material instanceof THREE.MeshStandardMaterial || mesh.material instanceof THREE.MeshPhysicalMaterial) {
          mesh.material.roughness = 0.6; // Softer highlights
          mesh.material.metalness = 0.2;
        }
      }
    });
  }, [scene]);

  // Model is scaled up and moved down on the Y axis to keep the face centered
  // Reverting to the old slight rotation as requested.
  return (
    <primitive ref={modelRef} object={scene} scale={18} position={[0, -1.8, 0]} rotation={[0.1, 0.3, 0]} />
  );
}

function CursorLight() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      // Map pointer from [-1, 1] to world space
      const x = (state.pointer.x * state.viewport.width) / 2;
      const y = (state.pointer.y * state.viewport.height) / 2;
      
      // Light tracks mouse smoothly
      lightRef.current.position.lerp(new THREE.Vector3(x, y, 2), 0.3);
    }
  });

  // Reduced brightness for a much softer, more subtle flashlight effect
  return <pointLight ref={lightRef} distance={3} decay={2.5} intensity={8} color="#ffffff" />;
}

export default function Scene() {
  return (
    <div className="home-model-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* NO ambient light so it is completely dark until hovered */}
        <CursorLight />
        <Model />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/face.glb');
