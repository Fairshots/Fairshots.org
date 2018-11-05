import React from "react";
import { Button } from "reactstrap";


export default function DeletePhoto() {
    return (

        <div className="text-link">Do you wish to remove this photo from your portfolio?
            <div className="d-flex justify-content-around mt-5">
                <Button>Yes
                </Button>
                <Button>No</Button>
            </div>
        </div>

    );
}
