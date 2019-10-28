import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spinner } from "reactstrap";
import { getAllPhotographers } from "../../actions";
import ProfileCards from "../../components/profilecards";
import FilterBox from "../../components/filterBox";

/**
 * When mounted dispatches action to fetch basic info from all photographers and display in proper
 * page routed in /photographers
 * @extends Component
 */
class AllPhotographers extends Component {
    state = {
        featuredPhotographers: [],
        morePhotographers: [],
        filteredFeatPhotographers: [],
        filteredMorePhotographers: [],
        select: "Name",
        condition: ""
    };

    componentDidMount() {
        const { allPhotographers, doGetPhotographers, token } = this.props;
        if (!allPhotographers.photographers) {
            doGetPhotographers(token).then(() => this.separatePhotographers());
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.condition !== prevState.condition) {
            this.filterPhotographers(this.state.select, this.state.condition);
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };

    separatePhotographers = () => {
        const { allPhotographers } = this.props;
        const allPhotogArray = Object.values(allPhotographers);
        if (allPhotogArray.length > 0) {
            const featuredPhotographers = allPhotogArray.filter(el => el && el.featured);
            const morePhotographers = allPhotogArray.filter(el => el && !el.featured);
            this.setState({
                featuredPhotographers,
                morePhotographers,
                filteredFeatPhotographers: featuredPhotographers,
                filteredMorePhotographers: morePhotographers
            });
        }
    };

    filterPhotographers = (field, condition) => {
        this.setState({
            filteredFeatPhotographers: this.state.featuredPhotographers.filter(el =>
                el[field].toLowerCase().includes(condition.toLowerCase())
            ),
            filteredMorePhotographers: this.state.morePhotographers.filter(el =>
                el[field].toLowerCase().includes(condition.toLowerCase())
            )
        });
    };

    render() {
        const {
            featuredPhotographers,
            morePhotographers,
            filteredFeatPhotographers,
            filteredMorePhotographers
        } = this.state;
        console.log(featuredPhotographers.length);
        return (
            <div>
                <FilterBox
                    options={["Name", "Country"]}
                    select={this.state.select}
                    condition={this.state.condition}
                    handleChange={this.handleChange}
                />
                <h2 className="feautured-h3">Featured Photographers </h2>
                {featuredPhotographers.length > 0 ? (
                    <ProfileCards
                        userType="photographer"
                        cards={filteredFeatPhotographers}
                        pushHistory={id => {
                            this.props.history.push(`/photographer/${id}`);
                        }}
                    />
                ) : (
                    <Spinner type="grow" color="success" />
                )}
                <h2 className="feautured-h3">More Photographers </h2>
                {morePhotographers.length > 0 ? (
                    <ProfileCards
                        userType="photographer"
                        cards={filteredMorePhotographers}
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
