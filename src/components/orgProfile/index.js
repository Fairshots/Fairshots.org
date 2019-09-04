import React from "react";
import { Button, Row } from "reactstrap";
import { FaCog, FaFileUpload, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import ProjectCards from "../projectComponents/projectCards";

import "./orgProfile.scss";

export default function OrgProfile({
    organization,
    uploadPhoto,
    toggleModal,
    thirdParty,
    history
}) {
    const { cloudinary } = window;
    const imgUploadWidget = cloudinary.createUploadWidget(
        { cloudName: "fairshots", uploadPreset: "kahvrgme" },
        (error, result) => {
            if (result.event === "success") {
                uploadPhoto(result.info.secure_url);
            }
        }
    );

    return (
        <div className="orgProfile container">
            <Row>
                <div className="col-sm-3">
                    <img className="profile-picture" src={organization.Logo} />
                </div>
                <div className="col-sm-9">
                    <h1 className="green-tittle">{organization.Name}</h1>
                    <p className="listing-subtittle page">
                        {organization.createdAt
                            ? `Member since ${new Date(
                                  organization.createdAt
                              ).toLocaleDateString()}`
                            : ""}
                    </p>
                    <p className="general-paragraph">{organization.Background}</p>
                </div>
            </Row>
            <Row>
                {!thirdParty && (
                    <div className="col-sm-3 d-flex flex-column align-items-center">
                        <Button
                            color="success"
                            className="w-100 mb-2"
                            onClick={() => toggleModal("UPDATE_PROFILE")}
                        >
                            Edit Profile <FaCog />
                        </Button>
                        <Button
                            color="success"
                            className="w-100 mb-2"
                            onClick={() => imgUploadWidget.open()}
                        >
                            Upload Photos <FaFileUpload />
                        </Button>
                        <Link to="/create-a-project" className="w-100 m-1">
                            <Button color="success" className="w-100 m-0 ">
                                Create New Project <FaPlus />
                            </Button>
                        </Link>
                    </div>
                )}
                <div className="col-sm-9 d-flex">
                    <div className="col-sm-6 p-0">
                        <Row>
                            <img src="/images/place.png" height="40" />
                            <p className="general-paragraph ml-2">
                                {`Based in ${organization.City || ""}${
                                    organization.city ? "," : ""
                                } ${organization.Country}`}
                            </p>
                        </Row>
                        <Row className="flex-column mt-2">
                            <p className="featured-listing-bold-black ml-2">
                                Primary supporting cause
                            </p>
                            <p className="general-paragraph ml-2">{organization.Causes}</p>
                        </Row>
                    </div>
                    <div className="col-sm-6">
                        {organization.website && (
                            <a href={organization.website} className="text-link">
                                {organization.website}
                            </a>
                        )}
                        {organization.facebook && (
                            <a href={organization.facebook} className="text-link">
                                {organization.facebook}
                            </a>
                        )}
                    </div>
                </div>
            </Row>
            <Row className="justify-content-center mt-2">
                <h3 className="portfolio-tittle">Projects Posted</h3>
            </Row>
            <Row className="justify-content-center">
                {organization.Projects ? (
                    <ProjectCards
                        userType="project"
                        cards={organization.Projects}
                        orgsInfo={{ Name: organization.Name, Country: organization.Country }}
                        pushHistory={id => {
                            history.push(`/project/${id}`);
                        }}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </Row>
        </div>
    );
}
