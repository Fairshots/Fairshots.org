import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    getAllPhotographers
} from "../../actions";
import Featured from "../../components/featured";

/**
 * When mounted dispatches action to fetch basic info from all photographers and display in proper page routed in /photographers
 * @extends Component
 */
class AllPhotographers extends Component {
    componentDidMount() {
        const { allPhotographers, doGetPhotographers } = this.props;
        if (!allPhotographers.photographers) { doGetPhotographers() }
    }


    render() {
        return (
            <Featured feats={this.props.mainFeatures} />
        );
    }
}

const mapStateToProps = state => ({
    allPhotographers: state.allPhotographers,
});
const mapDispatchToProps = dispatch => ({
    doGetPhotographers: () => dispatch(getAllPhotographers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllPhotographers));
