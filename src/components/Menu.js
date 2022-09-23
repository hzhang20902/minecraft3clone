import { useKeyboard } from "../hooks/useKeyboard";
import { useStore } from "../hooks/useStore";
import { useEffect } from "react";

export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

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

    return (
    <div className="menu absolute">
        <button onClick={() => saveWorld()}>Save</button>
        <button onClick={() => resetWorld()}>Reset</button>
        <div className="instructions">
            <h6>Move: W, A, S, D</h6>
            <h6>Aim and Craft: Mouse+Click</h6>
            <h6>Destroy: Alt+Click</h6>
            <h6>Material: 1-5</h6>
            <h6>Save: P</h6>
            <h6>Reset: 0</h6>
            <h6>Return Cursor: Esc</h6>
        </div>
    </div>
    )
}