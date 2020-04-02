import React from "react";

const Installed = (props) => {
    
    return(
        <div key={props.id} className="installed">
            <div className="title"> {props.name_company} </div>
            <div className="right">
                <ul>
                    {props.device_company.map(item => <li key={item.id}>{item.name}: <span>{item.qnt}</span></li>)}
                </ul>
            </div>
            
        </div>
    )
}

export default Installed;