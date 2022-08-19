import React, { useState } from "react";

function Box(){
    const [text, setText] = useState('')
    function toggletext(){
        if(text == ''){
            setText('X')
        }
    } 

    return<div className="box" onClick={toggletext}>{text}</div>
}

export default Box 