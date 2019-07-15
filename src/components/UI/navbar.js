import React, { Component } from "react";
import {
    Navbar,
    Nav,
    NavItem,
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import LoginHandler from "../../containers/loginHandler";
import "./navbar.scss";

class NavbarPage extends Component {
    state = {
        isOpen: false,
        orgsisOpen: false,
        photisOpen: false
    };

    toggleOpenCloses = name => {
        this.setState(prevState => ({ [name]: !prevState[name] }));
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
                            <UncontrolledDropdown>
                                <DropdownToggle nav color="#444444" caret>
                                    ORGANIZATIONS
                                </DropdownToggle>
                                <DropdownMenu className="n-dropdown-menu" right>
                                    <DropdownItem
                                        className="n-dropdown-link"
                                        onClick={this.redirect("/register#organization")}
                                    >
                                        REGISTER AN ORGANIZATION
                                    </DropdownItem>
                                    {isAuthenticated && userType !== "photographer" && (
                                        <DropdownItem
                                            className="n-dropdown-link"
                                            onClick={this.redirect("/create-a-project")}
                                        >
                                            CREATE A NEW PROJECT
                                        </DropdownItem>
                                    )}
                                    <DropdownItem
                                        className="n-dropdown-link"
                                        onClick={this.redirect("/photographers")}
                                    >
                                        FIND A PHOTOGRAPHER
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem className="navbarlink">
                            <UncontrolledDropdown>
                                <DropdownToggle nav color="#444444" caret>
                                    PHOTOGRAPHERS
                                </DropdownToggle>
                                <DropdownMenu className="n-dropdown-menu" right>
                                    <DropdownItem
                                        className="n-dropdown-link"
                                        onClick={this.redirect("/register#photographer")}
                                    >
                                        REGISTER AS A PHOTOGRAPHER
                                    </DropdownItem>
                                    <DropdownItem
                                        className="n-dropdown-link"
                                        onClick={this.redirect("/organizations")}
                                    >
                                        FIND AN NGO
                                    </DropdownItem>
                                    <DropdownItem
                                        className="n-dropdown-link"
                                        onClick={this.redirect("/projects")}
                                    >
                                        CURRENT PROJECTS
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
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
                    <Nav className="login-handler" right>
                        <LoginHandler />
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarPage;
