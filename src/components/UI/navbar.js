import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
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
        return (
            <Navbar color="#444444" dark expand="md">
                <Link to="/" className="navbar-brand">
                    <img src="images/Fair-shotsV3.png" width="250" />
                </Link>
                <NavbarToggler onClick={this.toggleCollapse} />
                <Collapse
                    className="justify-content-between"
                    id="navbarCollapse3"
                    isOpen={this.state.isOpen}
                    navbar
                >
                    <Nav className="align-items-center">
                        <NavItem className="navbarlink">
                            <Link to="/stories" className="nav-link">
                                Stories
                            </Link>
                        </NavItem>
                        <NavItem className="navbarlink">
                            <Link to="/projects" className="nav-link">
                                PROJECTS
                            </Link>
                        </NavItem>
                        <NavItem className="navbarlink">
                            <Link to="/organizations" className="nav-link">
                                ORGANIZATIONS
                            </Link>
                        </NavItem>
                        <NavItem className="navbarlink">
                            <Link to="/photographers" className="nav-link">
                                PHOTOGRAPHERS
                            </Link>
                        </NavItem>
                        <NavItem className="navbarlink">
                            <Link to="/about" className="nav-link">
                                ABOUT
                            </Link>
                        </NavItem>
                        <NavItem className="navbarlink">
                            <Link to="/contact-us" className="nav-link">
                                CONTACT
                            </Link>
                        </NavItem>
                    </Nav>
                    <Nav className="login-handler">
                        <LoginHandler />
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarPage;
