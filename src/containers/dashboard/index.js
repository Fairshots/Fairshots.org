import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardLogin from "./dashboardLogin";
import DashboardPannel from "./dashboardPannel";
import "./dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="dash">
        <DashboardPannel />
        {/* <DashboardLogin /> */}
      </div>
    );
  }
}

export default Dashboard;
