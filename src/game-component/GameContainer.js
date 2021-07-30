import React from "react";
import Player from "../game-tools/utils/player/player";
import useKeyPress from "../game-tools/utils/hooks/key-press/UseKeyPress";
import useGamePadPress from "../game-tools/utils/hooks/gamepad-press/useGamePadPress";
import {gamepadEvent} from "../game-tools/utils/hooks/gamepad-press/utils/gameInputEvent";
import useMovement from "../game-tools/utils/hooks/movement/useMovement";

function GameContainer() {

    const {dir, movement, movements, position} = useMovement(5);


    useGamePadPress((e)=> {
        gamepadEvent(e.gamepad, function (typeGamapadElementPressed) {
            console.log(typeGamapadElementPressed);
            movements(typeGamapadElementPressed.direction)
            return null;
        });
    });

    useKeyPress((keybord) => {
        const dir = keybord.key.replace("Arrow", "").toLowerCase();
        console.log(dir);
        movements(dir)
    });


    console.log(position);

    return(
        <div style={{height: "600px", width: "600px", backgroundColor: "#000000"}}>
            <Player skin="heroes1-first" step={movement} dir={dir} position={position}/>
        </div>
    );
}

export default GameContainer;