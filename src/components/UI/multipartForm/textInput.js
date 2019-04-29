import React from "react";
import withTooltip from "./tooltip";

const textInput = ({ name, config, changeHandler, onBlur }) => {
    let inputClasses = ["form-control"];

    if (!config.valid && config.touched) {
        inputClasses.push("is-invalid");
    } else {
        inputClasses = inputClasses.filter(customClass => customClass !== "is-invalid");
    }

    return (
        <>
            <label htmlFor={name}>{config.label}</label>
            <input
                name={name}
                onBlur={onBlur}
                className={inputClasses.join(" ")}
                type={config.type}
                placeholder={config.placeholder}
                required={config.validationRules.required}
                value={config.value}
                onChange={changeHandler}
                id={name}
            />
            <div className="invalid-feedback">This field is required</div>
        </>
    );
};

export default withTooltip(textInput);
