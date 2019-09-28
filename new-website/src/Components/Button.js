import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <div onClick={props.onClick} style={{color:props.color}} className="Button">
            {props.text}
        </div>
    );
}

export default Button;