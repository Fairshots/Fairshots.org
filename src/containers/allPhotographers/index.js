import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spinner } from "reactstrap";
import { getAllPhotographers } from "../../actions";
import ProfileCards from "../../components/profilecards";

/**
 * When mounted dispatches action to fetch basic info from all photographers and display in proper
 * page routed in /photographers
 * @extends Component
 */
class AllPhotographers extends Component {
    componentDidMount() {
        const { allPhotographers, doGetPhotographers } = this.props;
        if (!allPhotographers.photographers) {
            doGetPhotographers();
        }
    }

    render() {
        const { allPhotographers } = this.props;
        return (
            <div>
                {allPhotographers ? (
                    <ProfileCards
                        userType="photographer"
                        cards={Object.values(allPhotographers)}
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
    allPhotographers: state.allPhotographers
});
const mapDispatchToProps = dispatch => ({
    doGetPhotographers: () => dispatch(getAllPhotographers())
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AllPhotographers)
);
