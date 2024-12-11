import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Scene from "./Scene";

function Dithering() {
   return (
      <>
         <div id="canvas">
            <Canvas shadows dpr={[1, 2]}>
               <Suspense fallback="Loading">
                  <Scene />
                  <OrthographicCamera
                     makeDefault
                     position={[5, 5, 5]}
                     zoom={120}
                     near={0.01}
                     far={500}
                  />
                  <OrbitControls />
                  <ambientLight intensity={0.25} />
                  <directionalLight position={[0, 10, 5]} intensity={10.5} />
                  <color attach="background" args={["#000000"]} />
               </Suspense>
            </Canvas>
         </div>
      </>
   );
}

export default Dithering;
