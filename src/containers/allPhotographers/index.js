import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spinner } from "reactstrap";
import { getAllPhotographers } from "../../actions";
import ProfileCards from "../../components/profilecards";
import FilterBox from "../../components/filterBox";

import "./allPhotographers.scss";

/**
 * When mounted dispatches action to fetch basic info from all photographers and display in proper
 * page routed in /photographers
 * @extends Component
 */
class AllPhotographers extends Component {
    state = {
        featuredPhotographers: [],
        morePhotographers: [],
        select: "Name",
        condition: ""
    };

    componentDidMount() {
        const { allPhotographers, doGetPhotographers, token } = this.props;
        if (!allPhotographers.photographers) {
            doGetPhotographers(token).then(() => this.separatePhotographers());
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    separatePhotographers = () => {
        const { allPhotographers } = this.props;
        const allPhotogArray = Object.values(allPhotographers);
        if (allPhotogArray.length > 0) {
            this.setState({
                featuredPhotographers: allPhotogArray.filter(el => el.featured),
                morePhotographers: allPhotogArray.filter(el => !el.featured)
            });
        }
    };

    filterPhotographers = (array, field, condition) =>
        array.filter(el => el[field].includes(condition));

    render() {
        const { allPhotographers } = this.props;
        const { featuredPhotographers, morePhotographers, select, condition } = this.state;
        return (
            <div>
                <FilterBox
                    options={["Name", "Country"]}
                    select={this.state.select}
                    condition={this.state.condition}
                    handleChange={this.handleChange}
                />
                <h2 className="feautured-h3">Featured Photographers </h2>
                {featuredPhotographers ? (
                    <ProfileCards
                        userType="photographer"
                        cards={this.filterPhotographers(featuredPhotographers, select, condition)}
                        pushHistory={id => {
                            this.props.history.push(`/photographer/${id}`);
                        }}
                    />
                ) : (
                    <Spinner type="grow" color="success" />
                )}
                <h2 className="feautured-h3">More Photographers </h2>
                {featuredPhotographers ? (
                    <ProfileCards
                        userType="photographer"
                        cards={morePhotographers}
                        pushHistory={id => {
                            this.props.history.push(`/photographer/${id}`);
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
    allPhotographers: state.allPhotographers,
    token: state.auth.user.token
});
const mapDispatchToProps = dispatch => ({
    doGetPhotographers: token => dispatch(getAllPhotographers(token))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AllPhotographers)
);
