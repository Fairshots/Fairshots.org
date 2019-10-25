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
    state = {
        featuredOrgs: [],
        moreOrgs: []
    };

    componentDidMount() {
        const { allOrgs, doGetOrgs, token } = this.props;
        if (!allOrgs.organizations) {
            doGetOrgs(token).then(() => this.separateOrgs());
        }
    }

    separateOrgs = () => {
        const { allOrgs } = this.props;
        const allOrgArray = Object.values(allOrgs);
        if (allOrgArray.length > 0) {
            this.setState({
                featuredOrgs: allOrgArray.filter(el => el && el.featured),
                moreOrgs: allOrgArray.filter(el => el && !el.featured)
            });
        }
    };

    render() {
        const { allOrgs } = this.props;

        const { featuredOrgs, moreOrgs } = this.state;
        return (
            <div>
                <h2 className="feautured-h3">Featured Organizations </h2>
                {featuredOrgs ? (
                    <ProfileCards
                        userType="organization"
                        cards={featuredOrgs}
                        pushHistory={id => {
                            this.props.history.push(`/organization/${id}`);
                        }}
                    />
                ) : (
                    <Spinner type="grow" color="success" />
                )}
                <h2 className="feautured-h3">More Organizations </h2>
                {featuredOrgs ? (
                    <ProfileCards
                        userType="organization"
                        cards={moreOrgs}
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
