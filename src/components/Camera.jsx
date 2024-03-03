import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

const Camera = () => {
  return <PerspectiveCamera
    makeDefault
    position={[-20, 20, 20]}
    // position={[0, 0, 0]}
    fov={75}
  />;
};

export default Camera;
