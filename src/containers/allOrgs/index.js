import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    getAllOrgs
} from "../../actions";
import Featured from "../../components/featured";

/**
 * When mounted dispatches action to fetch basic info from all Orgs and display in proper page routed in /organizations
 * @extends Component
 */
class AllOrgs extends Component {
    componentDidMount() {
        const { allOrgs, doGetOrgs } = this.props;
        if (!allOrgs.Orgs) { doGetOrgs() }
    }


    render() {
        return (
            <Featured feats={this.props.allOrgs} />
        );
    }
}

const mapStateToProps = state => ({
    allOrgs: state.allOrgs,
});
const mapDispatchToProps = dispatch => ({
    doGetOrgs: () => dispatch(getAllOrgs()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllOrgs));
