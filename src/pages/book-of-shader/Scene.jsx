import React, { useRef, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import vertex from "./shaders/vertex.vert";
import fragment from "./shaders/fragment.frag";
import { DoubleSide } from "three";

export default function Scene({ mouse }) {
   const shaderRef = useRef();
   const { size } = useThree();

   // UseMemo to initialize uniforms once
   const uniforms = useMemo(
      () => ({
         u_time: { value: 0.0 },
         u_mouse: { value: [0.0, 0.0] },
         u_resolution: { value: [size.width, size.height] },
      }),
      [size.width, size.height] // Recalculate only when canvas size changes
   );

   // Update uniforms in place
   useFrame(({ clock }) => {
      if (shaderRef.current) {
         uniforms.u_time.value = clock.getElapsedTime(); // Update time
         uniforms.u_mouse.value = mouse; // Update mouse position
      }
   });

   return (
      <group>
         <mesh>
            <planeGeometry args={[4, 4]} />
            <shaderMaterial
               ref={shaderRef}
               side={DoubleSide}
               vertexShader={vertex}
               fragmentShader={fragment}
               uniforms={uniforms} // Pass memoized uniforms
            />
         </mesh>
      </group>
   );
}
