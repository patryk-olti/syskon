import React from 'react';

const Slider = (props) => {

    return(
        <>
        <div className="slider">

            <div className="txt">ostatnie instalacje</div>
            <div className="device">{props.lastRun[props.timeAnimation].device}</div>
            <div className="place">{props.lastRun[props.timeAnimation].place}</div>
            <div className="date">{props.lastRun[props.timeAnimation].date}</div>
            <div className="dots">     
                {props.lastRun.map(item => <div key={item.id} className={item.id === (props.timeAnimation+1) ? "dot active" : "dot"}></div>)}
            </div>
        </div>
        </>
    )
}

export default Slider;