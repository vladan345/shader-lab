import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import { Grid } from "@react-three/drei";
function Tutorial() {
   return (
      <>
         <div id="canvas">
            <Canvas>
               <Scene />
               <OrbitControls />
               <Grid
                  position={[0, -1.5, 0]}
                  sectionColor={"#fff"}
                  args={[30, 30]}
               />
            </Canvas>
         </div>
      </>
   );
}

export default Tutorial;
