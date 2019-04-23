import React from "react";
import { Tooltip } from "reactstrap";

const tooltip = Component => props => {
    if (props.config.tooltipContent) {
        return (
            <div className="form__group">
                <Tooltip
                    placement="right"
                    tag="div"
                    tooltipContent={props.config.tooltipContent}
                    tooltipClass="custom-tooltip"
                    target=".form__group"
                >
                    <Component {...props} />
                </Tooltip>
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
