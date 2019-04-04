import React, { useEffect } from "react";
import withTooltip from "../tooltip";
import imgUploadWidget from "../../../../helpers/imgUploadWidget";

import "./fileInput.scss";

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
                <div className="uploaded-images d-flex flex-wrap justify-content-center">
                    {config.value.map(i => (
                        <div id={i.cloudlink} className="img-holder">
                            <img src={i.cloudlink} className="img-thumbnail" />
                            <button
                                type="button"
                                className="close btn-light del-imgs"
                                aria-label="Close"
                                onClick={e => {
                                    e.preventDefault();
                                    changeHandler(`del ${i.cloudlink}`);
                                }}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default withTooltip(fileInput);
