import React from "react";
import lightOff from "../assets/images/light-off.png"; // use .. when directory is nested
import lightOn from "../assets/images/light-on.png";
document.title = "Class Component Method";

class State extends React.Component{  
    constructor(){
        super();
        this.state = {
            isLightOn: false,
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({isLightOn: !this.state.isLightOn});
    }
    
    render(){
        return (
            <div classname = "root">
                <button onClick={this.clickHandler}>Toggle</button>
                {this.state.isLightOn ?
                    <img src= {lightOn} alt="lightOn"/>
                 : <img src= {lightOff} alt="lightoff"/>}
            </div>
        );
    }
}

export default State;