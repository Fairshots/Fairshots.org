import React from "react";
import { MDBBtn, MDBIcon, MDBRow } from "mdbreact";
import { Link } from "react-router-dom";

import ProfileCards from "../profilecards";

import "./orgProfile.scss";

export default function OrgProfile({ organization, uploadPhoto, toggleModal, thirdParty }) {
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
            <MDBRow>
                <div className="col-sm-3">
                    <img className="profile-picture" src={organization.Logo} />
                </div>
                <div className="col-sm-9">
                    <h1 className="profile-tittle">{organization.Name}</h1>
                    <p className="listing-subtittle page">
                        Member since {`${new Date(organization.createdAt).toLocaleDateString()}`}
                    </p>
                    <p className="general-paragraph">{organization.Background}</p>
                </div>
            </MDBRow>
            <MDBRow>
                {!thirdParty && (
                    <div className="col-sm-3 d-flex flex-column align-items-center">
                        <MDBBtn
                            color="success"
                            className="w-100 mb-2"
                            onClick={() => toggleModal("UPDATE_PROFILE")}
                        >
                            Edit Profile <MDBIcon className="ml-2" icon="cog" />
                        </MDBBtn>
                        <MDBBtn
                            color="success"
                            className="w-100 mb-2"
                            onClick={() => imgUploadWidget.open()}
                        >
                            Upload Photos <MDBIcon className="ml-2" icon="file-upload" />
                        </MDBBtn>
                        <Link to="/create-a-project" className="w-100 m-1">
                            <MDBBtn color="success" className="w-100 m-0 ">
                                Create New Project <MDBIcon className="ml-2" icon="plus" />
                            </MDBBtn>
                        </Link>
                    </div>
                )}
                <div className="col-sm-9 d-flex">
                    <div className="col-sm-6 p-0">
                        <MDBRow>
                            <img src="/images/place.png" height="40" />
                            <p className="general-paragraph ml-2">
                                {`Based in ${organization.City}, ${organization.Country}`}
                            </p>
                        </MDBRow>
                        <MDBRow className="flex-column mt-2">
                            <p className="featured-listing-bold-black ml-2">
                                Primary supporting cause
                            </p>
                            <p className="general-paragraph ml-2">{organization.Causes}</p>
                        </MDBRow>
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
            </MDBRow>
            <MDBRow className="justify-content-center mt-2">
                <h3 className="portfolio-tittle">Projects Posted</h3>
            </MDBRow>
            <MDBRow className="portfolio-holder justify-content-center">
                {organization.Projects ? (
                    <ProfileCards
                        userType="project"
                        cards={organization.Projects}
                        pushHistory={(proj, id) => {
                            this.props.history.push(`/project/${id}`);
                        }}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </MDBRow>
        </div>
    );
}
