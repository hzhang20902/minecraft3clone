import { useBox } from "@react-three/cannon"
import { useStore } from "../hooks/useStore"
import * as textures from '../images/textures'

export const Cube = ({ position, texture }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube])

    const activeTexture = textures[texture + 'Tex']

    return (
        <mesh 
        onClick={(e) => {
            e.stopPropagation()
            const clickedFace = Math.floor(e.faceIndex/2)
            const {x,y,z} = ref.current.position
            console.log("clickedFace", clickedFace)
            if(clickedFace === 0){
                addCube(x+1,y,z)
            }
            if(clickedFace === 1){
                addCube(x-1,y,z)
            }
            if(clickedFace === 2){
                addCube(x,y+1,z)
            }
            if(clickedFace === 3){
                addCube(x,y-1,z)
            }
            if(clickedFace === 4){
                addCube(x,y,z+1)
            }
            if(clickedFace === 5){
                addCube(x,y,z-1)
            }
        }}      
        ref={ref}>
            <boxBufferGeometry attach='geometry' />
            <meshStandardMaterial  map={activeTexture} attach='material' />
        </mesh>
    )
}