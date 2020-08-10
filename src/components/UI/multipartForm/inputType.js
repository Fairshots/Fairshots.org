import React from "react";
import TextInput from "./textInput";
import Textarea from "./textarea";
import Select from "./select";
import Switch from "./switch";
import FileInput from "./fileInput";

const input = ({ name, elementType, onBlur, config, changeHandler }) => {
    let inputElement;

    switch (elementType) {
        case "input":
            inputElement = (
                <TextInput
                    name={name}
                    onBlur={onBlur}
                    config={config}
                    changeHandler={changeHandler}
                />
            );
            break;
        case "textarea":
            inputElement = (
                <Textarea
                    onBlur={onBlur}
                    name={name}
                    config={config}
                    changeHandler={changeHandler}
                />
            );
            break;
        case "switch":
            inputElement = <Switch name={name} config={config} changeHandler={changeHandler} />;
            break;
        case "select":
            inputElement = <Select name={name} config={config} changeHandler={changeHandler} />;
            break;
        case "fileinput":
            inputElement = <FileInput name={name} config={config} changeHandler={changeHandler} />;
            break;
    }

    return <>{inputElement}</>;
};

export default input;
