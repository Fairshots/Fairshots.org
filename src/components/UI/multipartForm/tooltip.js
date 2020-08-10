import React from "react";
import { UncontrolledTooltip } from "reactstrap";

const tooltip = Component => props => {
    if (props.config.tooltipContent) {
        return (
            <div className="form__group">
                <Component {...props} />
                <UncontrolledTooltip
                    placement="right"
                    tag="div"
                    tooltipClass="custom-tooltip"
                    target={props.name}
                >
                    {props.config.tooltipContent}
                </UncontrolledTooltip>
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
