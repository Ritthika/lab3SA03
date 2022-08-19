import React, { useState } from "react";

function Box(props){
    const [text, setText] = useState('')
    function toggletext(){
        if(text === ''){
            setText(props.currentState)
            props.changeTurn()
        }

    } 
    return<div className="box" onClick={toggletext}>{text}</div>
}

export default Box 