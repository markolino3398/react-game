import {useState} from "react";


export default function useMovement(maxMovement) {
    const [dir, setDir] = useState(0);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [movement, setMovement] = useState(0);

    const directions = {
        up: 0,
        left: 1,
        right: 2,
        down: 3,
    }

    const movementsSize = 4;

    const modifier = {
        up: {
            x: 0, y: -movementsSize
        },
        left: {
            x: -movementsSize, y: 0
        },
        right: {
            x: movementsSize, y: 0
        },
        down: {
            x: 0, y: movementsSize
        }
    }

    function movements(dir) {
        setDir(prev => {
            console.log(prev);
            console.log(directions[dir]);
            if (directions[dir] === prev) {
                console.log("movement")
                move(dir)
            };
            return directions[dir];
        });
        setMovement(prev => prev < maxMovement - 1 ? prev + 1 : 0);
    }

    function move(dir) {
        setPosition(prev => (
            {
                x: prev.x + modifier[dir].x,
                y: prev.y + modifier[dir].y,
            }));
        console.log(position);
        console.log("dads");
    }

    return {
        movements,
        dir,
        movement,
        position,

    }

}