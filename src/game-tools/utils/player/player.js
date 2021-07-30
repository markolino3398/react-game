import React from "react";
import Actor from "../actor/actor";

function Player({ skin, step, dir, position }) {

    const data = {
        h: 36,
        w: 32
    }

    console.log(position);
    return(
        <div style={{height: "600px", width: "600px", backgroundColor: "#000000"}}>
            <Actor sprite={`/game-assets/sprite/heroes/${skin}.png`} data={data} step={step} dir={dir} position={position}/>
        </div>
    );
}

export default Player;