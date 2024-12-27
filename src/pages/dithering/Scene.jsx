import React, { useRef } from "react";
import { Effect } from "postprocessing";
import { wrapEffect, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";
import vertex from "./shaders/vertex.vert";
import fragment from "./shaders/fragment.frag";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

class RetroEffectImpl extends Effect {
   constructor({ matrixSize = 8.0, bias = 0.5 }) {
      const uniforms = new Map([
         ["matrixSize", new THREE.Uniform(8.0)],
         ["bias", new THREE.Uniform(0.5)],
      ]);

      super("RetroEffect", fragment, {
         uniforms,
      });

      this.uniforms = uniforms;
   }

   set matrixSize(value) {
      this.uniforms.get("matrixSize").value = value;
   }

   get matrixSize() {
      return this.uniforms.get("matrixSize").value;
   }

   set bias(value) {
      this.uniforms.get("bias").value = value;
   }

   get bias() {
      return this.uniforms.get("bias").value;
   }
}

const RetroEffect = wrapEffect(RetroEffectImpl);

export default function Scene() {
   const mesh = useRef();
   const effect = useRef();
   const { matrixSize, bias } = useControls({
      matrixSize: {
         value: "8.0",
         options: ["2.0", "4.0", "8.0"],
      },
      bias: {
         value: 0.7,
         min: 0.0,
         max: 1.0,
      },
   });

   useFrame(() => {
      effect.current.matrixSize = parseInt(matrixSize, 10);
      effect.current.bias = bias;
   });

   return (
      <>
         <mesh receiveShadow castShadow>
            <torusKnotGeometry args={[1, 0.25, 128, 100]} />
            <meshStandardMaterial color="cyan" />
         </mesh>
         <EffectComposer>
            <RetroEffect ref={effect} />
         </EffectComposer>
      </>
   );
}
