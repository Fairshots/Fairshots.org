import React from "react";
import { MDBTooltip } from "mdbreact";

const tooltip = Component => props => {
    if (props.config.tooltipContent) {
        return (
            <div className="form__group">
                <MDBTooltip
                    placement="right"
                    tag="div"
                    tooltipContent={props.config.tooltipContent}
                    tooltipClass="custom-tooltip"
                >
                    <Component {...props} />
                </MDBTooltip>
            </div>
        );
    }
    return (
        <div className="form__group">
            <Component {...props} />
        </div>
    );
};

export default tooltip;
