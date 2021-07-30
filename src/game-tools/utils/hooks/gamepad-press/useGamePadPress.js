import {useEffect} from "react";


export default function useGamePadPress(fn) {
    const hasGamepadAPI = () => "getGamepads" in navigator;

    useEffect(() =>{

            if(hasGamepadAPI()){
                window.addEventListener("gamepadconnected", fn);

                window.addEventListener("gamepaddisconnected", function (e) {
                    console.log(e);
                });

            }else{
                alert("No gamepad associated to your computer")
            }



            return () => window.removeEventListener("gamepadconnected", fn);
        }
        , [fn]);

}