import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spinner } from "reactstrap";
import { getAllOrgs, ThirdPartyUserProfile } from "../../actions";
import ProfileCards from "../../components/profilecards";

/**
 * When mounted dispatches action to fetch basic info from all Orgs and display in proper page routed in /organizations
 * @extends Component
 */
class AllOrgs extends Component {
    componentDidMount() {
        const { allOrgs, doGetOrgs } = this.props;
        if (!allOrgs.organizations) {
            doGetOrgs();
        }
    }

    render() {
        const { allOrgs, loadThirdPartyUserProfile } = this.props;
        return (
            <div>
                {allOrgs ? (
                    <ProfileCards
                        userType="organization"
                        cards={Object.values(allOrgs)}
                        pushHistory={(profile, id) => {
                            loadThirdPartyUserProfile(profile);
                            this.props.history.push(`/organization/${id}`);
                        }}
                    />
                ) : (
                    <Spinner type="grow" color="success" />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    allOrgs: state.allOrgs
});
const mapDispatchToProps = dispatch => ({
    doGetOrgs: () => dispatch(getAllOrgs()),
    loadThirdPartyUserProfile: profile => dispatch(ThirdPartyUserProfile(profile))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AllOrgs)
);
