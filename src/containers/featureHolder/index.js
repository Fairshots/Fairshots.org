import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import { getFeatures } from "../../actions";
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
                        pushHistory={id => {
                            this.props.history.push(`/photographer/${id}`);
                        }}
                    />
                ) : (
                    <Spinner type="grow" color="success" />
                )}
                <Link to="/photographers" className="text-link see-all mb-3">
                    see all available photographers
                </Link>
                <h2 className="feautured-h3">Featured ORGANIZATIONS</h2>
                {mainFeatures.organizations ? (
                    <ProfileCards
                        userType="organization"
                        cards={mainFeatures.organizations}
                        pushHistory={id => {
                            this.props.history.push(`/organization/${id}`);
                        }}
                    />
                ) : (
                    <Spinner type="grow" color="success" />
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
    doGetFeatures: () => dispatch(getFeatures())
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(FeatureHolder)
);
