
const analogicTypes = {
    0: {
        id: "Left analogic",
        direction: {
            0: "left", //if value < 0
            1: "right" // if value > 0
        }
    },
    1: {
        id: "Left analogic",
        direction: {
            0: "up", //if value < 0
            1: "down" // if value > 0
        }
    },
    2: {
        id: "Right analogic",
        direction: {
            0: "left", //if value < 0
            1: "right" // if value > 0
        }
    },
    3: {
        id: "Right analogic",
        direction: {
            0: "up", //if value < 0
            1: "down" // if value > 0
        }
    }
}
let gamepadInput = null;


const gamepadEvent = (gamepad, callback) => {

    const gamepadIndex = gamepad.index;

    setInterval(() => {
        if(gamepadIndex !== undefined) {
            // a gamepad is connected and has an index
            const myGamepad = navigator.getGamepads()[gamepadIndex];
            if(myGamepad){
                myGamepad.buttons.map(e => e.pressed).forEach((isPressed, buttonIndex) => {
                    if(isPressed) {
                        gamepadInput = {
                            typeInput: "button",
                            gamepad: myGamepad.id ,
                            buttonPressed: buttonIndex
                        }
                        callback(gamepadInput);
                    }
                })

                myGamepad.axes.map((e , index) => {
                    let tempvalue = e.toString()*100;
                    if(tempvalue > 20 || tempvalue < -20){
                        let direction = (tempvalue > 0)? analogicTypes[index].direction[1] : analogicTypes[index].direction[0];
                        let analogicType = analogicTypes[index].id;
                        gamepadInput = {
                            typeInput: "analogic",
                            gamepad: myGamepad.id ,
                            analogicType: analogicType,
                            direction: direction,
                            percentualeMovement: tempvalue
                        }
                        callback(gamepadInput);
                    }
                    return null;
                });
            }

        }
    }, 80);


}



export {gamepadEvent, gamepadInput}
