import React from "react";
import { Button } from "reactstrap";


export default function InactivateProfile({ doInactivateProfile, toggleModal }) {
    return (

        <div className="general-paragraph">Do you really wish to inactivate your profile? =(((
            <div className="d-flex justify-content-around mt-5">
                <Button onClick={() => doInactivateProfile() }>Yes
                </Button>
                <Button onClick={() => toggleModal("INACTIVATE_PROFILE", "") }>No</Button>
            </div>
        </div>

    );
}
