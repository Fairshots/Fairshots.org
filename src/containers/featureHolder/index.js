import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getFeatures, ThirdPartyUserProfile } from "../../actions";
import ProfileCards from "../../components/profilecards";

import "./featured.scss";
/**
 * When mounted dispatches action to fetch featured photographers and orgs and renders it in main page.
 * @extends Component
 */
class FeatureHolder extends Component {
    componentDidMount() {
        const { mainFeatures, doGetFeatures } = this.props;
        if (!mainFeatures.photographers) {
            doGetFeatures();
        }
    }

    render() {
        const { mainFeatures, loadThirdPartyUserProfile } = this.props;
        return (
            <div className="featured">
                <h2 className="feautured-h3">Featured photographers</h2>
                {mainFeatures.photographers ? (
                    <ProfileCards
                        userType="photographer"
                        cards={mainFeatures.photographers}
                        pushHistory={(profile, id) => {
                            loadThirdPartyUserProfile(profile);
                            this.props.history.push(`/photographer/${id}`);
                        }}
                    />
                ) : (
                    "Loading..."
                )}
                <Link to="/photographers" className="text-link see-all mb-3">
                    see all available photographers
                </Link>

                <h2 className="feautured-h3">Featured ORGANIZATIONS</h2>

                {mainFeatures.organizations ? (
                    <ProfileCards
                        userType="organization"
                        cards={mainFeatures.organizations}
                        pushHistory={(profile, id) => {
                            loadThirdPartyUserProfile(profile);
                            this.props.history.push(`/organization/${id}`);
                        }}
                    />
                ) : (
                    "Loading..."
                )}

                <Link to="/organizations" className="text-link see-all mb-3">
                    see all available ORGANIZATIONS
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    mainFeatures: state.mainFeatures
});
const mapDispatchToProps = dispatch => ({
    doGetFeatures: () => dispatch(getFeatures()),
    loadThirdPartyUserProfile: profile => dispatch(ThirdPartyUserProfile(profile))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(FeatureHolder)
);
