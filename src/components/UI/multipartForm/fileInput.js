import React from "react";
import withTooltip from "./tooltip";

const fileInput = ({ name, config, changeHandler, onBlur }) => (
    <>
        <div className="form-group">
            <label htmlFor={name}>{config.label}</label>
            <input
                type="button"
                className="form-control-file btn"
                id={name}
                placeholder={config.placeholder}
            />
        </div>
    </>
);

export default withTooltip(fileInput);
