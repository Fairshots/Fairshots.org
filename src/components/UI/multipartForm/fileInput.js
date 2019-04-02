import React, { useEffect } from "react";
import withTooltip from "./tooltip";
import imgUploadWidget from "../../../helpers/imgUploadWidget";

const fileInput = ({ name, config, changeHandler }) => {
    useEffect(
        () => () => {
            // clear imgUploadWidget iframes on unmounting
            const iframes = document.querySelectorAll("iframe");
            if (iframes.length > 1) {
                for (let i = 0; i < iframes.length; i += 1) {
                    iframes[i].parentNode.removeChild(iframes[i]);
                }
            }
        },
        []
    );

    return (
        <>
            <div className="form-group">
                <label htmlFor={name}>{config.label}</label>
                <button
                    className="form-control-file btn"
                    id={name}
                    onClick={e => {
                        e.preventDefault();
                        imgUploadWidget(changeHandler);
                    }}
                >
                    {config.placeholder}
                </button>
            </div>
        </>
    );
};

export default withTooltip(fileInput);
