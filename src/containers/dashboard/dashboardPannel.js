import React, { Component } from "react";
import { MDBListGroup, MDBListGroupItem, MDBBadge } from "mdbreact";
import DashboardPage from "./DashboardPage";
import SideNavigation from "./sideNavigation";

class dashboardPannel extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-2">
            <SideNavigation />
          </div>
          <div className="col-sm">
            <DashboardPage />
          </div>
        </div>
      </div>
    );
  }
}

export default dashboardPannel;
