import { useBox } from "@react-three/cannon"
import * as textures from '../images/textures'

export const Cube = ({ position, texture }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    const activeTexture = textures[texture + 'Tex']

    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach='geometry' />
            <meshStandardMaterial  map={activeTexture} attach='material' />
        </mesh>
    )
}