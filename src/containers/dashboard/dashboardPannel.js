import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import DashboardPage from "./DashboardPage";
import SideNavigation from "./sideNavigation";
import Sidebar from "./Sidebar";
import OrgsCard from "./orgsCard";
import PhotographersCard from "./photographersCard";
import { getAllOrgs, getAllPhotographers } from "../../actions";

class dashboardPannel extends Component {
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
      <div>
        <div className="d-flex flex-row " style={{ display: "flex" }}>
          <Sidebar />
          <div className="p-4">
            {allOrgs.organizations ? <OrgsCard orgs={allOrgs.organizations} /> : ""}
          </div>
          <div className="p-4">
            {allPhotographers.photographers ? (
              <PhotographersCard photographers={allPhotographers.photographers} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allOrgs: state.allOrgs,
  allPhotographers: state.allPhotographers
});
const mapDispatchToProps = dispatch => ({
  doGetOrgs: () => dispatch(getAllOrgs()),
  doGetPhotographers: () => dispatch(getAllPhotographers())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(dashboardPannel)
);
