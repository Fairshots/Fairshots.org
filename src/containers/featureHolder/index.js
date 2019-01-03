import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getFeatures } from "../../actions";
import ProfileCards from "../../components/profilecards";

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
        const { mainFeatures } = this.props;
        return (
            <div className="featured">
                <h2 className="feautured-h3">Featured photographers</h2>
                {mainFeatures.photographers ? (
                    <ProfileCards
                        userType="photographer"
                        cards={mainFeatures.photographers}
                        history={this.props.history}
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
                        history={this.props.history}
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
    doGetFeatures: () => dispatch(getFeatures())
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(FeatureHolder)
);
