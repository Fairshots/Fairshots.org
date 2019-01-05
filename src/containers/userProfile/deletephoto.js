import React from "react";
import { Button } from "reactstrap";

export default function DeletePhoto({ doDelPhoto, photoItem, toggleModal }) {
    return (
        <div className="general-paragraph">
            Do you wish to remove this photo from your portfolio?
            <div className="d-flex justify-content-around mt-5">
                <Button onClick={() => doDelPhoto(photoItem)}>Yes</Button>
                <Button onClick={() => toggleModal("DELETE_PHOTO", "")}>No</Button>
            </div>
        </div>
    );
}
