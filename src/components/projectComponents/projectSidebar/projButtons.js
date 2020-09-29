import React from "react";
import { ButtonGroup, Button } from "reactstrap";

const projButtons = ({ userType, toggleModal, projectExpired, hasPhotos }) => (
    <ButtonGroup className="w-100" vertical>
        {// eslint-disable-next-line no-nested-ternary
        userType === "owner" ? (
            <>
                <Button
                    className="mb-2"
                    color="success"
                    outline
                    onClick={() => toggleModal({ show: true, type: "UPDATE_PROJECT" })}
                >
                    Update informations
                </Button>
                {hasPhotos ? (
                    <Button
                        className="mb-2"
                        color="success"
                        outline
                        onClick={() => toggleModal({ show: true, type: "ORGANIZE_PHOTOS" })}
                    >
                        Organize photos
                    </Button>
                ) : (
                    <></>
                )}
                <Button className="mb-2" color="success" outline>
                    Close applications
                </Button>
            </>
        ) : (
            userType === "photographer" && (
                <>
                    {!projectExpired && (
                        <Button
                            className="mb-2"
                            color="success"
                            outline
                            onClick={() => toggleModal({ show: true, type: "APPLICATION" })}
                        >
                            Apply
                        </Button>
                    )}
                </>
            )
        )}
    </ButtonGroup>
);

export default projButtons;
