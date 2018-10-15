import React from "react";

export default function PhotogProfile({ photographer }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <img className="profile-picture" src={photographer.ProfilePic} />
                </div>
                <div className="col-sm-9">
                    <h1 className="profile-tittle">{photographer.Name}</h1>
                    <p className="listing-subtittle page">{`${photographer.Skill} Photographer`}</p>
                    <p className="general-paragraph">{photographer.Biography}</p>
                </div>

            </div>
            <div className="row">
                <div className="col-sm-3">
                        One of two columns
                </div>
                <div className="col-sm-9 d-flex">
                    <img src="/images/place.png" height="40"/>
                    <p className="general-paragraph ml-2">{`Based in ${photographer.City}, ${photographer.Country}`} </p>
                </div>
            </div>
        </div>
    );
}
