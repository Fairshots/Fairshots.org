import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import DashboardPage from "./DashboardPage";
import SideNavigation from "./sideNavigation";
import OrgsGrid from "./orgsGrid";
import PhotographersGrid from "./photographersGrid";
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
      <div className="container" style={{ paddingTop: 20 }}>
        <div className="row">
          <div className="col">
            {allOrgs.organizations ? <OrgsGrid orgs={allOrgs.organizations} /> : ""}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {allPhotographers.photographers ? (
              <PhotographersGrid photographers={allPhotographers.photographers} />
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
