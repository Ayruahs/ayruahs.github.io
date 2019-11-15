import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <div onClick={props.onClick} className={props.color === "black" ? "Button" : "Button Button-Active"}>
            {props.text}
        </div>
    );
}

export default Button;