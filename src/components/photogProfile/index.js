import React from "react";
import { Button, Row } from "reactstrap";
import { FaSadTear } from "react-icons/fa";
import imgUploadWidget from "../../helpers/imgUploadWidget";
import Portfolio from "../portfolio";

import "./photogProfile.scss";

export default function PhotogProfile({
    photographer,
    uploadPhoto,
    toggleModal,
    thirdParty,
    isAuthenticated
}) {
    return (
        <>
            {photographer && (
                <div className="photogProfile container">
                    <Row>
                        <div className="col-lg-3">
                            <img className="profile-picture" src={photographer.ProfilePic} />
                        </div>
                        <div className="col-lg-9">
                            <h1 className="green-tittle">{photographer.Name}</h1>
                            <p className="listing-subtittle page">{`${
                                photographer.Skill
                            } Photographer`}</p>
                            <p className="general-paragraph">{photographer.Biography}</p>
                        </div>
                    </Row>
                    <Row>
                        {isAuthenticated && thirdParty && (
                            <div className="col-lg-3 d-flex flex-column align-items-center">
                                <Button
                                    className="contact-button"
                                    color="success w-75 mb-2"
                                    onClick={() => toggleModal("MAKE_CONTACT")}
                                >
                                    Contact this Photographer
                                </Button>
                            </div>
                        )}
                        {!thirdParty && (
                            <div className="col-lg-3 d-flex flex-column align-items-center">
                                <Button
                                    color="success w-75 mb-2"
                                    onClick={() => toggleModal("UPDATE_PROFILE")}
                                >
                                    Edit Profile
                                </Button>
                                <Button
                                    color="success w-75 mb-2"
                                    onClick={() => imgUploadWidget(uploadPhoto)}
                                >
                                    Upload Photos
                                </Button>
                                {photographer.Photos && photographer.Photos.length > 1 ? (
                                    <Button
                                        color="success w-75 mb-2"
                                        onClick={() => toggleModal("ORGANIZE_PHOTOS")}
                                    >
                                        Organize Photos
                                    </Button>
                                ) : (
                                    <></>
                                )}
                            </div>
                        )}
                        <div className="col-lg-9">
                            <Row>
                                <div className="col-12 col-lg-6">
                                    <img src="/images/place.png" height="40" />
                                    <p className="general-paragraph ml-2">
                                        {`Based in ${photographer.City || ""}${
                                            photographer.City ? "," : ""
                                        } ${photographer.Country}`}
                                    </p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {photographer.webpage && (
                                        <a href={photographer.webpage} className="text-link">
                                            {photographer.webpage}
                                        </a>
                                    )}
                                    {photographer.facebook && (
                                        <a href={photographer.facebook} className="text-link">
                                            {photographer.facebook}
                                        </a>
                                    )}
                                    {photographer.instagram && (
                                        <a href={photographer.instagram} className="text-link">
                                            {photographer.instagram}
                                        </a>
                                    )}
                                </div>
                            </Row>
                        </div>
                    </Row>
                    <Row className="row justify-content-center">
                        <h3 className="portfolio-tittle">Portfolio</h3>
                    </Row>
                    <Row className="portfolio-holder">
                        {photographer.Photos &&
                            (photographer.Photos.length > 0 ? (
                                <Portfolio
                                    photos={photographer.Photos}
                                    toggleDelPhoto={toggleModal}
                                    thirdParty={thirdParty}
                                    te
                                />
                            ) : (
                                <p className="no-photos-yet">
                                    No photos here yet <FaSadTear />
                                </p>
                            ))}
                    </Row>
                </div>
            )}
        </>
    );
}
