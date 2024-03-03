import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Camera from "./components/Camera.jsx";
import Lights from "./components/Lights.jsx";
import Minecraft from "./components/Minecraft.jsx";
import Scene from "./components/Scene.jsx";
import { Suspense } from "react";
import * as THREE from "three"

function App() {
  return (
    <div className="Container" style={{ width: "100%", height: "100vh" }}>
      <Canvas gl={({antialias: true, toneMapping: THREE.ReinhardToneMapping,
      toneMappingExposure: 1.5})} shadowMap shadows="true">
        <Camera />
        <Lights />
        {/* <mesh position={[4, 0, 0]} rotation-y={Math.PI * 0.5}>
          <torusKnotGeometry args={[1, 0.3, 100, 100]} />
          <meshNormalMaterial flatShading={true} />
        </mesh> */}
        <Suspense fallback={null}>
          {/* <Matcap /> */}
          {/* <Bricks /> */}
          {/* <Minecraft />
          <Environment files={'./../../recursos/hdr/decor_shop_1k.hdr'} /> */}
        </Suspense>
        {/* <mesh position={[-4, 0, 0]}>
          <torusKnotGeometry args={[1, 0.3, 100, 100]} />
          <meshBasicMaterial color={"#FF7ED4"} />
        </mesh> */}

        <OrbitControls target={[1, 10, 0]}/>
      </Canvas>
    </div>
  );
}

export default App;
