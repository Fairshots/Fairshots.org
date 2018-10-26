import React from "react";
import {
    Button, Row
} from "reactstrap";

import Portfolio from "../portfolio";

import "./orgProfile.scss";


export default function OrgProfile({ organization, uploadPhoto, toggleModal }) {
    const { cloudinary } = window;
    const imgUploadWidget = cloudinary.createUploadWidget({ cloudName: "fairshots", uploadPreset: "kahvrgme" }, (error, result) => {
        if (result.event === "success") {
            uploadPhoto(result.info.secure_url);
        }
    });

    return (
        <div className="orgProfile container">
            <Row>
                <div className="col-sm-3">
                    <img className="profile-picture" src={organization.Logo} />
                </div>
                <div className="col-sm-9">
                    <h1 className="profile-tittle">{organization.Name}</h1>
                    <p className="listing-subtittle page">Member since {`${(new Date(organization.createdAt)).toLocaleDateString()}`}</p>
                    <p className="general-paragraph">{organization.Background}</p>
                </div>

            </Row>
            <Row>
                <div className="col-sm-3 d-flex flex-column align-items-center">
                    <Button color="success w-75 mb-2" onClick={toggleModal}>Edit Profile</Button>
                    <Button color="success w-75 mb-2" onClick={() => imgUploadWidget.open()}>Upload Photos</Button>
                    <Button color="success w-75 mb-2" onClick={() => true}>Create New Project</Button>
                </div>
                <div className="col-sm-9 d-flex">
                    <div className="col-sm-6 p-0">
                        <Row>
                            <img src="/images/place.png" height="40"/>
                            <p className="general-paragraph ml-2">{`Based in ${organization.City}, ${organization.Country}`} </p>
                        </Row>
                        <Row className="flex-column mt-2">
                            <p className="featured-listing-bold-black ml-2">Primary supporting cause </p>
                            <p className="general-paragraph ml-2">{organization.Causes}</p>
                        </Row>
                    </div>
                    <div className="col-sm-6">
                        {organization.website && <a href={organization.website} className="text-link">{organization.website}</a>}
                        {organization.facebook && <a href={organization.facebook} className="text-link">{organization.facebook}</a>}
                    </div>
                </div>
            </Row>
            <Row className="justify-content-center mt-2">
                <h3 className="portfolio-tittle">Projects Posted</h3>
            </Row>
            <Row className="portfolio-holder justify-content-center">
                {organization.Photos ? <Portfolio photos={organization.Photos} /> : <p>Loading...</p> }

            </Row>
        </div>
    );
}
