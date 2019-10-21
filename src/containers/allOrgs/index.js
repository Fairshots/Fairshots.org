import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spinner } from "reactstrap";
import { getAllOrgs } from "../../actions";
import ProfileCards from "../../components/profilecards";

/**
 * When mounted dispatches action to fetch basic info from all Orgs and display in proper page routed in /organizations
 * @extends Component
 */
class AllOrgs extends Component {
    componentDidMount() {
        const { allOrgs, doGetOrgs, token } = this.props;
        if (!allOrgs.organizations) {
            doGetOrgs(token);
        }
    }

    render() {
        const { allOrgs } = this.props;
        return (
            <div>
                {allOrgs ? (
                    <ProfileCards
                        userType="organization"
                        cards={Object.values(allOrgs)}
                        pushHistory={id => {
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
    allOrgs: state.allOrgs,
    token: state.auth.user.token
});
const mapDispatchToProps = dispatch => ({
    doGetOrgs: token => dispatch(getAllOrgs(token))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AllOrgs)
);
