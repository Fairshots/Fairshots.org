import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spinner } from "reactstrap";
import { getAllOrgs } from "../../actions";
import ProfileCards from "../../components/profilecards";
import FilterBox from "../../components/filterBox";

/**
 * When mounted dispatches action to fetch basic info from all Orgs and display in proper page routed in /organizations
 * @extends Component
 */
class AllOrgs extends Component {
    state = {
        featuredOrgs: [],
        moreOrgs: [],
        filteredFeatOrgs: [],
        filteredMoreOrgs: [],
        select: "Name",
        condition: ""
    };

    componentDidMount() {
        const { allOrgs, doGetOrgs, token } = this.props;
        if (!allOrgs.organizations) {
            doGetOrgs(token).then(() => this.separateOrgs());
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.condition !== prevState.condition) {
            this.filterOrgs(this.state.select, this.state.condition);
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };

    separateOrgs = () => {
        const { allOrgs } = this.props;
        const allOrgArray = Object.values(allOrgs);
        if (allOrgArray.length > 0) {
            const featuredOrgs = allOrgArray.filter(el => el && el.featured);
            const moreOrgs = allOrgArray.filter(el => el && !el.featured);
            this.setState({
                featuredOrgs,
                moreOrgs,
                filteredFeatOrgs: featuredOrgs,
                filteredMoreOrgs: moreOrgs
            });
        }
    };

    filterOrgs = (field, condition) => {
        this.setState({
            filteredFeatOrgs: this.state.featuredOrgs.filter(el =>
                el[field].toLowerCase().includes(condition.toLowerCase())
            ),
            filteredMoreOrgs: this.state.moreOrgs.filter(el =>
                el[field].toLowerCase().includes(condition.toLowerCase())
            )
        });
    };

    render() {
        const { featuredOrgs, moreOrgs, filteredFeatOrgs, filteredMoreOrgs } = this.state;

        return (
            <div>
                <FilterBox
                    options={["Name", "Country"]}
                    select={this.state.select}
                    condition={this.state.condition}
                    handleChange={this.handleChange}
                />
                <h2 className="feautured-h3">Featured Organizations </h2>
                {featuredOrgs ? (
                    <ProfileCards
                        userType="organization"
                        cards={filteredFeatOrgs}
                        pushHistory={id => {
                            this.props.history.push(`/organization/${id}`);
                        }}
                    />
                ) : (
                    <Spinner type="grow" color="success" />
                )}
                <h2 className="feautured-h3">More Organizations </h2>
                {moreOrgs ? (
                    <ProfileCards
                        userType="organization"
                        cards={filteredMoreOrgs}
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
