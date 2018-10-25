import React from "react";
import {
    Button
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
            <div className="row">
                <div className="col-sm-3">
                    <img className="profile-picture" src={organization.Logo} />
                </div>
                <div className="col-sm-9">
                    <h1 className="profile-tittle">{organization.Name}</h1>
                    <p className="listing-subtittle page">{`${organization.Cause} organization`}</p>
                    <p className="general-paragraph">{organization.Biography}</p>
                </div>

            </div>
            <div className="row">
                <div className="col-sm-3 d-flex flex-column align-items-center">
                    <Button color="success w-75 mb-2" onClick={toggleModal}>Edit Profile</Button>
                    <Button color="success w-75 mb-2" onClick={() => imgUploadWidget.open()}>Upload Photos</Button>
                </div>
                <div className="col-sm-9 d-flex">
                    <div className="col-sm-6 d-flex p-0">
                        <img src="/images/place.png" height="40"/>
                        <p className="general-paragraph ml-2">{`Based in ${organization.City}, ${organization.Country}`} </p>
                    </div>
                    <div className="col-sm-6">
                        {organization.webpage && <a href={organization.webpage} className="text-link">{organization.website}</a>}
                        {organization.facebook && <a href={organization.facebook} className="text-link">{organization.facebook}</a>}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <h3 className="portfolio-tittle">Portfolio</h3>
            </div>
            <div className="portfolio-holder row justify-content-center">
                {organization.Photos ? <Portfolio photos={organization.Photos} /> : <p>Loading...</p> }

            </div>
        </div>
    );
}
