import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

function Simple() {
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

export default Simple;
