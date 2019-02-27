import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardLogin from "./dashboardLogin";
import DashboardPannel from "./dashboardPannel";
import SideNavigation from "./sideNavigation";

import "./dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="dash">
        <DashboardPannel />
      </div>
    );
  }
}

export default Dashboard;
