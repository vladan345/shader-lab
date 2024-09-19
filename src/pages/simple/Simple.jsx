import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

function Simple() {
  return (
    <>
      <h1>Simple shader</h1>
      <div id="canvas">
        <Canvas>
          <Scene />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default Simple;
