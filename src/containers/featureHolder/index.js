import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getFeatures } from "../../actions";
import ProfileCards from "../../components/profilecards";

/**
 *
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
                        cards={mainFeatures.photographers}
                        scrollOffset={1100}
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
                        cards={mainFeatures.organizations}
                        scrollOffset={1400}
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
