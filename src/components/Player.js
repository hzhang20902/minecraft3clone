import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useKeyboard } from "../hooks/useKeyboard";

const JUMP_FORCE = 4
const SPEED = 4

export const Player = () => {

    const {
        moveBackward,
        moveForward,
        moveLeft,
        moveRight,
        jump,
    } = useKeyboard()

    // console.log('actions', Object.entries(actions).filter(([k, v]) => v))

    const { camera } = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [ 0, 1, 0]
    }))

    const playerVelocity = useRef([0,0,0]);
    useEffect(() => {
        api.velocity.subscribe((v) => playerVelocity.current = v)
    }, [api.velocity])


    const playerPosition = useRef([0,0,0]);
    useEffect(() => {
        api.position.subscribe((p) => playerPosition.current = p)
    }, [api.position])

    useFrame(() => {

        camera.position.copy(new Vector3(
            playerPosition.current[0], 
            playerPosition.current[1], 
            playerPosition.current[2]))

        const direction = new Vector3()
        const frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        )
        const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
            0,
            0
        )

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation)

        api.velocity.set(direction.x, playerVelocity.current[1], direction.z)

        if(jump && Math.abs(playerVelocity.current[1]) < 0.05){
        api.velocity.set(
            playerVelocity.current[0],
            JUMP_FORCE,
            playerVelocity.current[2])
        }
    })

    return (
        <mesh ref={ref}></mesh>
    )

}