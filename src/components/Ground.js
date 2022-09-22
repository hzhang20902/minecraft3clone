import { usePlane } from "@react-three/cannon"
import { NearestFilter, RepeatWrapping } from "three"
import { grassTex, groundTex } from "../images/textures"

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [ -Math.PI/2 , 0 , 0 ],
        position: [ 0 , 0, 0 ],
    }))

    groundTex.magFilter = NearestFilter
    groundTex.wrapS = RepeatWrapping
    groundTex.wrapT = RepeatWrapping
    groundTex.repeat.set(100,100)

    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach='geometry' args={[100,100]} />
            <meshStandardMaterial attach='material' map={groundTex} />
        </mesh>
    )
}