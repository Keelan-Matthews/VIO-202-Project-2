import React from 'react';
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../images/world.jpg";
import { useFrame } from '@react-three/fiber'

export default function WorldObj() {
    const colorMap = useLoader(TextureLoader, texture);
    const myMesh = React.useRef();

    useFrame(({ clock }) => {
        myMesh.current.rotation.x = clock.getElapsedTime()/10
      })
    return (
        <mesh ref={myMesh}>
            <sphereBufferGeometry attach="geometry" args={[3, 32, 32]} />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    )
}
