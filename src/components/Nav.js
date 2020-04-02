import React from "react";
import "./nav.css";
import Button from "./Button";

import logo from "./img/syskon1.png";

const Navigation = (props) => {

    const buttons = props.menu.map(item => (
        <Button 
            key={item.id}
            id={item.id}
            name={item.name}
            active={item.active}
            navClick={props.navClick}
            resetSpec={props.resetSpec}
            resetSetSlider={props.resetSetSlider}
        />
    ))

    return(

        <div className="navi">
            <nav>
                <div className="img"><img src={logo} alt=""/></div>
                <ul>
                    {buttons}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;