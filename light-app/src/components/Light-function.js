//destructuring
import React, {useEffect, useState} from "react";
import lightOff from "../assets/images/light-off.png"; // use .. when directory is nested
import lightOn from "../assets/images/light-on.png";

function State(){
    let [isLightOn, updateStatus] = useState(false);

    useEffect(()=>{
        document.title = `React Hook isLightOn: ${isLightOn}`;
    },[isLightOn])
    
    //UI
    return (
        <>
        <div classname = "root">
        <button onClick={e => updateStatus(!isLightOn)}>Toggle</button>
                {isLightOn ?
                    <img src= {lightOn} alt="lightOn"/>
                 : <img src= {lightOff} alt="lightoff"/>}
            </div>
        </>
    )
}

export default State;