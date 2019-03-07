import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import DashboardLogin from "./dashboardLogin";
import DashboardPannel from "./dashboardPannel";
import SideNavigation from "./sideNavigation";
import { getAllOrgs, getAllPhotographers } from "../../actions";

import "./dashboard.scss";

class Dashboard extends Component {
  componentDidMount() {
    const { allPhotographers, doGetPhotographers, allOrgs, doGetOrgs } = this.props;
    if (!allPhotographers.photographers) {
      doGetPhotographers();
    }
    if (!allOrgs.organizations) {
      doGetOrgs();
    }
  }

  render() {
    const { allPhotographers, allOrgs } = this.props;
    return (
      <div className="dash">{allPhotographers.photographers.forEach(v => console.log(v))}</div>
    );
  }
}

const mapStateToProps = state => ({
  allOrgs: state.allOrgs,
  allPhotographers: state.allPhotographers
});
const mapDispatchToProps = dispatch => ({
  doGetOrgs: () => dispatch(getAllOrgs()),
  doGetPhotographers: () => dispatch(getAllPhotographers()),
  loadThirdPartyUserProfile: profile => dispatch(ThirdPartyUserProfile(profile))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
