import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Matcap = () => {
    const matcap = useLoader(TextureLoader, './../public/recursos/matcaps/matcap5.png')

    return (
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[1, 0.3, 100, 100]}/>
          <meshMatcapMaterial matcap={matcap}/>
        </mesh>
    )
}

export default Matcap