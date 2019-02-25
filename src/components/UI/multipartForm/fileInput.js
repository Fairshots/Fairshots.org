import React from "react";
import withTooltip from "./tooltip";

const fileInput = ({ name, config, changeHandler, onBlur }) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor={name}>{config.label}</label>
                <input
                    type="file"
                    className="form-control-file"
                    id={name}
                    placeholder={config.placeholder}
                />
            </div>
        </>
    );
};

export default withTooltip(fileInput);
