import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginHandler from "../containers/loginHandler";

export default class NavBar extends Component {
    render() {
        return (
            <div
                data-collapse="medium"
                data-animation="default"
                data-duration="400"
                className="navbar w-nav"
            >
                <div className="d-flex justify-content-between align-items-center w-100">
                    <Link to="/" className="brand w-nav-brand">
                        <img src="images/Fair-shotsV3.png" width="250" />
                    </Link>
                    <nav role="navigation" className="nav-menu w-nav-menu">
                        <div data-delay="0" data-hover="1" className="navbarlink w-dropdown">
                            <div className="navbarlink w-dropdown-toggle">
                                <div>Organizations</div>
                                <div className="w-icon-dropdown-toggle" />
                            </div>
                            <nav className="w-dropdown-list">
                                <Link
                                    to="/register#organization"
                                    className="dropdown-link w-dropdown-link"
                                >
                                    register an organization
                                </Link>
                                <a
                                    href="create-a-project.html"
                                    className="dropdown-link w-dropdown-link"
                                >
                                    create a NEW PROJECT
                                </a>
                                <Link to="/photographers" className="dropdown-link w-dropdown-link">
                                    find a photographer
                                </Link>
                            </nav>
                        </div>
                        <div data-delay="0" data-hover="1" className="navbarlink w-dropdown">
                            <div className="navbarlink w-dropdown-toggle">
                                <div>photographers</div>
                                <div className="w-icon-dropdown-toggle" />
                            </div>
                            <nav className="w-dropdown-list">
                                <Link
                                    to="/register#photographer"
                                    className="dropdown-link w-dropdown-link"
                                >
                                    register as a photographer
                                </Link>
                                <Link to="/organizations" className="dropdown-link w-dropdown-link">
                                    find an ngo
                                </Link>
                                <a
                                    href="current-opportunities.html"
                                    className="dropdown-link w-dropdown-link"
                                >
                                    CURRENT PROJECTS
                                </a>
                            </nav>
                        </div>
                        <Link to="/about" className="navbarlink w-nav-link">
                            About
                        </Link>
                        <Link to="/contact-us" className="navbarlink w-nav-link">
                            Contact
                        </Link>
                    </nav>
                    <div className="w-nav-button">
                        <div className="w-icon-nav-menu" />
                    </div>
                    <LoginHandler />
                </div>
            </div>
        );
    }
}
