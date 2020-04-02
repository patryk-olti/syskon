import React from "react";

const Button = (props) => {

    return(
        <li><a href="#" 
            onClick={() => {
                props.navClick(props.id) 
                props.resetSpec()
                props.resetSetSlider()
            }}
            key={props.name}
            className = {props.active ? "active" : null}
            >
                {props.name}
            </a> 
            <div></div>
        </li>
    )
}

export default Button;