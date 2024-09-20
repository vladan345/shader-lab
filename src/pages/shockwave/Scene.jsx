import React, { useMemo, useRef } from "react";
import { useTexture } from "@react-three/drei";
import vertex from "./shaders/vertex.vert";
import fragment from "./shaders/fragment.frag";
import { DoubleSide, Vector2 } from "three";
import { useFrame } from "@react-three/fiber";

export default function Scene() {
  const materialRef = useRef(null);
  const texture = useTexture("/water.jpg");
  // const texture = useTexture("/grid.avif");

  // Get the image dimensions from the loaded texture
  const imageResolution = useMemo(
    () => new Vector2(texture.image.width, texture.image.height),
    [texture]
  );

  // Set the plane resolution (matching the geometry dimensions)
  const planeResolution = new Vector2(6, 4); // Plane is 4x4

  // Pass in time
  useFrame((state) => {
    if (materialRef.current) {
      const time = state.clock.getElapsedTime();
      materialRef.current.uniforms.uTime.value = time - Math.floor(time);
    }
  });

  const handleClick = (event) => {
    const pointerX = event.pointer.x;
    const pointerY = event.pointer.y;

    materialRef.current.uniforms.uCenter.value = new Vector2(
      pointerX,
      pointerY
    );
  };

  return (
    <group>
      <mesh onClick={handleClick}>
        <planeGeometry args={[...planeResolution]} />
        <shaderMaterial
          ref={materialRef}
          side={DoubleSide}
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={{
            uTexture: { value: texture },
            uPlaneResolution: { value: planeResolution },
            uImageResolution: { value: imageResolution },
            uTime: { value: 0 },
            uCenter: { value: [0, 0] },
          }}
        />
      </mesh>
    </group>
  );
}
