import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

function Name() {
   const [mouse, setMouse] = useState([0, 0]);
   const handlePointerMove = (event) => {
      setMouse([event.clientX, event.clientY]);
   };
   return (
      <>
         <div id="canvas">
            <Canvas onPointerMove={handlePointerMove}>
               <Scene mouse={mouse} />
               <OrbitControls enableZoom={false} />
            </Canvas>
         </div>
      </>
   );
}

export default Name;
