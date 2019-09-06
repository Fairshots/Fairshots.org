import React from "react";
import { Button } from "reactstrap";
import imgUploadWidget from "../../helpers/imgUploadWidget";
import Portfolio from "../portfolio";

import "./photogProfile.scss";

export default function PhotogProfile({ photographer, uploadPhoto, toggleModal, thirdParty }) {
    return (
        <>
            {photographer && (
                <div className="photogProfile container">
                    <div className="row">
                        <div className="col-sm-3">
                            <img className="profile-picture" src={photographer.ProfilePic} />
                        </div>
                        <div className="col-sm-9">
                            <h1 className="green-tittle">{photographer.Name}</h1>
                            <p className="listing-subtittle page">{`${
                                photographer.Skill
                            } Photographer`}</p>
                            <p className="general-paragraph">{photographer.Biography}</p>
                        </div>
                    </div>
                    <div className="row">
                        {!thirdParty && (
                            <div className="col-sm-3 d-flex flex-column align-items-center">
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
                                <Button
                                    color="secondary w-75 mb-2"
                                    onClick={() => toggleModal("INACTIVATE_PROFILE")}
                                >
                                    {photographer.accountInactive ? "Reactivate" : "Inactivate"}{" "}
                                    Profile
                                </Button>
                            </div>
                        )}
                        <div className="col-sm-9 d-flex">
                            <div className="col-sm-6 d-flex p-0">
                                <img src="/images/place.png" height="40" />
                                <p className="general-paragraph ml-2">
                                    {`Based in ${photographer.City || ""}${
                                        photographer.City ? "," : ""
                                    } ${photographer.Country}`}
                                </p>
                            </div>
                            <div className="col-sm-6">
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
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <h3 className="portfolio-tittle">Portfolio</h3>
                    </div>
                    <div className="portfolio-holder">
                        {photographer.Photos ? (
                            <Portfolio
                                photos={photographer.Photos}
                                toggleDelPhoto={toggleModal}
                                thirdParty={thirdParty}
                            />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
