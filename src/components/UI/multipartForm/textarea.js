import React from "react";
import withTooltip from "./tooltip";

const textarea = ({ rows = "5", name, config, onBlur, changeHandler, id, ...props }) => {
    let inputClasses = ["form-control"];

    if (!config.valid && config.touched) {
        inputClasses.push("is-invalid");
    } else {
        inputClasses = inputClasses.filter(customClass => customClass !== "is-invalid");
    }

    return (
        <>
            <label htmlFor={name}>{config.placeholder}</label>
            <textarea
                placeholder={config.placeholder}
                onBlur={onBlur}
                className={inputClasses.join(" ")}
                rows={rows}
                name={name}
                required={config.validationRules.required}
                value={config.value}
                onChange={changeHandler}
                id={id}
            />
            <div className="invalid-feedback">This field is required</div>
        </>
    );
};

export default withTooltip(textarea);
