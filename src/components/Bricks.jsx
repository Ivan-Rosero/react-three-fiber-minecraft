import React from "react"
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import *  as THREE from "three"

const Bricks = () => {

    const basecolor = useLoader(TextureLoader, './../public/recursos/bricks/basecolor.jpg')
    const normalMap = useLoader(TextureLoader, './../public/recursos/bricks/normal.jpg')
    const aoMap = useLoader(TextureLoader, './../public/recursos/bricks/ao.jpg')
    const roughnessMap = useLoader(TextureLoader, './../public/recursos/bricks/roughness.jpg')
    const displacementMap = useLoader(TextureLoader, './../public/recursos/bricks/displacement.png')
    // basecolor.minFilter = THREE.NearestFilter
    // basecolor.maxFilter = THREE.NearestFilter
    return (
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1, 120, 120, 120]}/>
          <meshStandardMaterial map={basecolor} normalMap={normalMap}
          aoMap={aoMap} roughnessMap={roughnessMap} displacementMap={displacementMap}
          displacementScale={0.01}/>
        </mesh>
    )
}

export default Bricks