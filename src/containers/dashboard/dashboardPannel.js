import React, { Component } from "react";
import { MDBListGroup, MDBListGroupItem, MDBBadge } from "mdbreact";

class dashboardPannel extends Component {
  render() {
    return (
      <div className=".container-fluid">
        <div className="container">
          <h1>pannel</h1>
          <div className="row" style={{ height: "100vh" }}>
            <div style={{ backgroundColor: "#d2ded2", width: "270px" }}>
              <div class="list-group" id="list-tab" role="tablist">
                <a
                  class="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-toggle="list"
                  href="#"
                  role="tab"
                  aria-controls="home"
                >
                  <i class="fas fa-laptop mr-2" />
                  Home
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  href="#"
                  role="tab"
                  aria-controls="profile"
                >
                  <i class="fas fa-laptop mr-2" />
                  Profile
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                  href="#"
                  role="tab"
                  aria-controls="messages"
                >
                  <i class="fas fa-code mr-2" />
                  Messages
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  id="list-settings-list"
                  data-toggle="list"
                  href="#"
                  role="tab"
                  aria-controls="settings"
                >
                  <i class="fas fa-cogs mr-2" />
                  Settings
                </a>
              </div>
            </div>
            <div className="col-sm" style={{ backgroundColor: "#e2ece2", padding: "20px" }}>
              <div className="row">
                <div className="col-4" style={{ backgroundColor: "green" }} />
                <div className="col-sm">
                  <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                      Total Users
                      <MDBBadge color="primary" pill>
                        34
                      </MDBBadge>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                      Photographers
                      <MDBBadge color="primary" pill>
                        15
                      </MDBBadge>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                      NGO
                      <MDBBadge color="primary" pill>
                        4
                      </MDBBadge>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </div>
              </div>
              <br />
              <div className="row" style={{ backgroundColor: "brown", padding: "20px" }}>
                <div className="col-sm">teste</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default dashboardPannel;
