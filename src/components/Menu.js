import { useKeyboard } from "../hooks/useKeyboard";
import { useStore } from "../hooks/useStore";
import { useEffect, useState } from "react";

export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])
    const [visible, setVisible] = useState(false)

    const {
        save,
        reset,
    } = useKeyboard();

    useEffect(() => {
        const menuButton = {
            saveB: save,
            resetB: reset,
        }

        const pressed = Object.entries(menuButton).map(([k,v]) => v)
        if(pressed[0]){
            saveWorld()
            return
        }
        if(pressed[1]){
            resetWorld()
            return
        }
    }, [save, reset, saveWorld, resetWorld])

    useEffect(() => {
		const visibilityTimeout = setTimeout(() => {
			setVisible(false)
		}, 11000)
		setVisible(true)
		return () => {
			clearTimeout(visibilityTimeout)
		}
	}, [])

    return (
    <div className="menu absolute">
        <button onClick={() => saveWorld()}>Save</button>
        <button onClick={() => resetWorld()}>Reset</button>
        <div className="instructions">
            <h6>Move: W, A, S, D</h6>
            <h6>Jump: Space</h6>
            <h6>Aim and Craft: Mouse+Click</h6>
            <h6>Destroy: Alt+Click</h6>
            <h6>Material: 1-5</h6>
            <h6>Save: P</h6>
            <h6>Reset: 0</h6>
            <h6>Return Cursor: Esc</h6>
        </div>
        <div className="sneaky" hidden={!visible}>
                <h6>*Working on known issue:</h6> 
                <h6>Save command may</h6>
                <h6>crash the app;</h6>
                <h6>however, it will still Save.</h6>
                <h6>Simply refresh the browser</h6>
                <h6>and return to your game.*</h6>
            </div>
    </div>
    )
}