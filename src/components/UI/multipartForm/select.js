import React from "react";

const select = ({ config, changeHandler, name, ...props }) => {
    return (
        <div className="form__group">
            <label htmlFor={name}>{config.label}</label>
            <select
                {...props}
                name={name}
                className="w-select"
                required={config.validationRules.required}
                value={config.value}
                onChange={changeHandler}
            >
                {config.options.map(option => (
                    <option key={option.displayedValue} value={option.displayedValue}>
                        {option.displayedValue}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default select;
