import React from "react";

import { useFrame } from "@react-three/fiber";
import vertex from "./shaders/vertex.vert";
import fragment from "./shaders/fragment.frag";
import { DoubleSide } from "three";

export default function Scene() {
  return (
    <group>
      <mesh>
        <planeGeometry args={[4, 4]} />
        <shaderMaterial
          side={DoubleSide}
          vertexShader={vertex}
          fragmentShader={fragment}
        />
      </mesh>
    </group>
  );
}
