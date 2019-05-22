import React from "react";
import { ButtonGroup, Button } from "reactstrap";

const projButtons = ({ userType }) => {
    console.log(userType);
    return (
        <ButtonGroup className="w-100" vertical>
            {// eslint-disable-next-line no-nested-ternary
            userType === "owner" ? (
                <>
                    <Button className="mb-2" color="success" outline>
                        Update project
                    </Button>
                    <Button className="mb-2" color="success" outline>
                        Close applications
                    </Button>
                </>
            ) : userType === "photographer" ? (
                <>
                    <Button className="mb-2" color="success" outline>
                        Apply
                    </Button>
                    <Button className="mb-2" color="success" outline>
                        Help this Cause
                    </Button>
                </>
            ) : (
                <Button className="mb-2" color="success" outline>
                    Help this cause
                </Button>
            )}
        </ButtonGroup>
    );
};

export default projButtons;
