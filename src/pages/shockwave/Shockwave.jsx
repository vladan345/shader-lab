import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

function Shockwave() {
  return (
    <>
      <div id="canvas">
        <Canvas>
          <Scene />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </>
  );
}

export default Shockwave;
