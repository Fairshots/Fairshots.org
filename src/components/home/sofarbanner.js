import React, { Component } from "react";
import { connect } from "react-redux";
import "./sofarbanner.scss";

const SoFarBanner = ({ mainFeatures }) => {
    let countries;
    if (mainFeatures.orgCities) {
        const orgcountries = mainFeatures.orgCities
            .map(el => el.Country)
            .reduce((acc, el) => {
                if (acc && acc.includes(el)) return acc;
                return `${acc} , ${el}`;
            });
        countries = mainFeatures.photogCities
            .map(el => el.Country)
            .reduce((acc, el) => {
                if (acc && acc.includes(el)) return acc;
                return `${acc} , ${el}`;
            }, orgcountries);

        countries = countries
            .split(", ")
            .sort()
            .join(", ");
    }
    return (
        <div>
            <div className="so-far-banner">
                <div className="so-far-div">
                    <p className="so-far-paragraph">
                        WE HAVE {mainFeatures.numPhotographers} PHOTOGRAPHERS FROM AROUND THE GLOBE
                        AND &nbsp;{mainFeatures.numOrgs} ORGANIzATIONS LOOKING to COLLABORATE!
                    </p>
                    <p className="updates-small-paragraph">
                        FAIRSHOTS is successfully CONNECting PHOTOGRAPHERS TO NGOS in: {countries}
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    mainFeatures: state.mainFeatures
});

export default connect(mapStateToProps)(SoFarBanner);
