import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import vertex from "./shaders/vertex.vert";
import fragment from "./shaders/fragment.frag";
import { DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";

export default function Scene() {
   const shader = useRef(null);
   const texture1 = useTexture("/image1.webp");
   const texture2 = useTexture("/image2.webp");

   useFrame(({ clock }) => {
      const time = clock.elapsedTime;
      let progress = time % 1;
      progress = (Math.sin(time) + 1) / 2;
      shader.current.uniforms.uProgress.value = progress;
   });
   return (
      <group>
         <mesh>
            <boxGeometry args={[3, 3, 3]} />
            <shaderMaterial
               ref={shader}
               side={DoubleSide}
               vertexShader={vertex}
               fragmentShader={fragment}
               uniforms={{
                  uProgress: { value: 0 },
                  uTexture1: { value: texture1 },
                  uTexture2: { value: texture2 },
               }}
            />
         </mesh>
      </group>
   );
}
