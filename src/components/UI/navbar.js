import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { Link } from "react-router-dom";
import LoginHandler from "../../containers/loginHandler";
import "./navbar.scss";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  redirect = adress => () => {
    this.props.history.push(adress);
  };

  render() {
    const { isAuthenticated, userType } = this.props;
    return (
      <MDBNavbar color="#444444" style={{ paddingRight: "6rem" }} dark expand="md">
        <Link to="/" className="navbar-brand">
          <img src="images/Fair-shotsV3.png" width="250" />
        </Link>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav color="#444444" caret>
                  ORGANIZATIONS
                </MDBDropdownToggle>
                <MDBDropdownMenu className="n-dropdown-menu" right>
                  <MDBDropdownItem
                    className="n-dropdown-link"
                    onClick={this.redirect("/register#organization")}
                  >
                    REGISTER AN ORGANIZATION
                  </MDBDropdownItem>
                  {isAuthenticated && userType !== "photographer" && (
                    <MDBDropdownItem
                      className="n-dropdown-link"
                      onClick={this.redirect("/create-a-project")}
                    >
                      CREATE A NEW PROJECT
                    </MDBDropdownItem>
                  )}
                  <MDBDropdownItem
                    className="n-dropdown-link"
                    onClick={this.redirect("/photographers")}
                  >
                    FIND A PHOTOGRAPHER
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav color="#444444" caret>
                  PHOTOGRAPHERS
                </MDBDropdownToggle>
                <MDBDropdownMenu className="n-dropdown-menu" right>
                  <MDBDropdownItem
                    className="n-dropdown-link"
                    onClick={this.redirect("/register#photographer")}
                  >
                    REGISTER AS A PHOTOGRAPHER
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    className="n-dropdown-link"
                    onClick={this.redirect("/organizations")}
                  >
                    FIND AN NGO
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    className="n-dropdown-link"
                    onClick={this.redirect("/projectss")}
                  >
                    CURRENT PROJECTS
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">ABOUT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact-us">CONTACT</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav className="login-handler" right>
            <LoginHandler />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
