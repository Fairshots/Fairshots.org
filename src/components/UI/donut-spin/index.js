import React from "react";
import "./donut-spin.scss";

const DonutSpin = ({ spinshow }) => {
    const donutStyle = {
        display: spinshow ? "flex" : "none"
    };
    return (
        <div className="donut-holder" style={donutStyle}>
            <div className="donut" />
        </div>
    );
};

export default DonutSpin;
