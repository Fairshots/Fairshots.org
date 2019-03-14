import React, { Component } from "react";
import DashboardPannel from "./dashboardPannel";

import "./dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardPannel />
      </div>
    );
  }
}

export default Dashboard;
