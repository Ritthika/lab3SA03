import React, { useState } from "react";
import './App.css';

function Box(props){
    const [text, setText] = useState('')
    function toggletext(){
        if(text === ''){
            setText(props.currentState)
            props.changeTurn(props.row, props.col)
        }

    } 
    return<div className="box" onClick={toggletext}>{text}</div>
}

export default Box 