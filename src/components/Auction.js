import React from 'react';

const Auction = (props) => {
    return(
        <div key={props.key} className="auction">
            <div className="name">{props.name}</div>
            <div className="more">{props.more}</div>
            <div className="date">{props.date}</div>
            <div className="status">{props.status !== "" ? "status: " + props.status : null}</div>
        </div>
    )
}

export default Auction;