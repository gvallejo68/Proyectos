
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Box, RoundedBox, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Floating Lego Block
const ConstructionBlock = ({ position, color, rotation }: { position: [number, number, number]; color: string; rotation: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
      ref.current.rotation.x = rotation[0] + Math.sin(t * 0.5) * 0.1;
      ref.current.rotation.y = rotation[1] + t * 0.2;
    }
  });

  return (
    <RoundedBox ref={ref} args={[1, 1, 1]} radius={0.05} smoothness={4} position={position} rotation={rotation}>
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.1}
      />
    </RoundedBox>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="#C5A059" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            {/* Main Cluster symbolizing construction */}
            <ConstructionBlock position={[0, 0, 0]} color="#C5A059" rotation={[0.5, 0.5, 0]} />
            <ConstructionBlock position={[-1.2, 0.8, 0.5]} color="#f3f4f6" rotation={[0.2, 0.1, 0]} />
            <ConstructionBlock position={[1.2, -0.5, -0.5]} color="#1a1a1a" rotation={[-0.2, 0.4, 0.2]} />
            
            {/* Floating outliers */}
            <ConstructionBlock position={[-3, -2, -2]} color="#C5A059" rotation={[1, 1, 0]} />
            <ConstructionBlock position={[3, 2, -3]} color="#e5e7eb" rotation={[0, 1, 1]} />
        </Float>

        <Environment preset="city" />
        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      </Canvas>
    </div>
  );
};

export const StructuralScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [4, 4, 4], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 5]} angle={0.5} penumbra={1} intensity={2} castShadow />
        <Environment preset="studio" />
        
        <group position={[0, -1, 0]}>
            {/* Abstract Tower Structure */}
            <Box args={[1, 4, 1]} position={[0, 2, 0]}>
                <meshStandardMaterial color="#C5A059" roughness={0.1} metalness={0.8} />
            </Box>
            
            {/* Base Supports */}
            <Box args={[3, 0.2, 3]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#333" roughness={0.5} />
            </Box>
            
            {/* Modular Units surrounding */}
            {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const x = Math.cos(angle) * 1.5;
                const z = Math.sin(angle) * 1.5;
                return (
                    <Box key={i} args={[0.5, 0.5, 0.5]} position={[x, 0.25 + (i%3)*0.5, z]}>
                        <meshStandardMaterial color="#f3f4f6" />
                    </Box>
                )
            })}
        </group>
        
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
             <group position={[0, 2, 0]}>
                {/* Floating "Plan" elements */}
                <Box args={[0.1, 0.1, 0.1]} position={[2, 0, 0]}>
                     <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={2} />
                </Box>
             </group>
        </Float>

      </Canvas>
    </div>
  );
}
