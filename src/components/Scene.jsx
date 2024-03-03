import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from 'react'
import { OrbitControls } from "@react-three/drei";
import * as dat from 'dat.gui'
import Camera from "./Camera";

export default function Scene() {
    const material = useRef()

    const mesh = useRef(null)

    const light = useRef()

    useEffect(() => {
        const gui = new dat.GUI({ width: 400 })

        const debugObject = {
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            lightIntensity: 5,
            colorMaterial: "#FF7ED4",
            scale: 1,
            castShadow: true
        }

        gui.addColor(debugObject, 'colorMaterial')
            .onChange(() => {
                material.current.material.color.set(debugObject.colorMaterial)
            })

        gui.add(debugObject, 'scale', {
            'small': 1,
            'medium': 2,
            'big': 3
        }).onChange(() => {
            mesh.current.scale.set(
                debugObject.scale,
                debugObject.scale,
                debugObject.scale
            )
        })

        gui.add(debugObject.position, 'x')
            .min(-4)
            .max(4)
            .step(0.0005)
            .onChange(() => {
                mesh.current.position.x = debugObject.position.x
            })
            .name("Pos x")

        gui.add(debugObject.position, 'y')
            .min(-4)
            .max(4)
            .step(0.0005)
            .onChange(() => {
                mesh.current.position.y = debugObject.position.y
            })
            .name("Pos y")

        gui.add(debugObject.position, 'z')
            .min(-4)
            .max(4)
            .step(0.0005)
            .onChange(() => {
                mesh.current.position.z = debugObject.position.z
            })
            .name("Pos z")

        gui.add(debugObject, 'lightIntensity')
            .min(0)
            .max(10)
            .step(0.0005)
            .name("Light intensity")
            .onChange(() => {
                light.current.intensity = debugObject.lightIntensity
            })

        gui.add(debugObject, 'castShadow')
            .onChange(() => {
                light.current.castShadow = debugObject.castShadow
            })

        return () => {
            gui.destroy()
        }
    }, [])

    return (
        <Canvas shadoyMap shadows="true">
            <Camera />
            <mesh ref={mesh}
                position={[0, 0.5, 0]}
                castShadow={true}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"#FF7ED4"} />
            </mesh>
            <mesh rotation-x={Math.PI * -0.5}
            receiveShadow={true}
            >
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial />
            </mesh>
            <directionalLight ref={light} intensity={1.2} position={[10, 10, 10]}></directionalLight>
            <OrbitControls />
        </Canvas>
    )
}