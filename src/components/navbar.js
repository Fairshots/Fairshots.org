import React, { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar w-nav">
              <div className="w-container"><a href="index.html" className="brand w-nav-brand"><img src="images/Fair-shotsV3.png" width="250"/></a>
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <div data-delay="0" data-hover="1" className="navbarlink w-dropdown">
                    <div className="navbarlink w-dropdown-toggle">
                      <div>Organizations</div>
                      <div className="w-icon-dropdown-toggle"></div>
                    </div>
                    <nav className="w-dropdown-list"><a href="register.html" className="dropdown-link w-dropdown-link">register an organization</a><a href="create-a-project.html" className="dropdown-link w-dropdown-link">create a NEW PROJECT</a><a href="photographers.html" className="dropdown-link w-dropdown-link">find a photographer</a></nav>
                  </div>
                  <div data-delay="0" data-hover="1" className="navbarlink w-dropdown">
                    <div className="navbarlink w-dropdown-toggle">
                      <div>photographers</div>
                      <div className="w-icon-dropdown-toggle"></div>
                    </div>
                    <nav className="w-dropdown-list"><a href="register.html" className="dropdown-link w-dropdown-link">register as a photographer</a><a href="organizations.html" className="dropdown-link w-dropdown-link">find an ngo</a><a href="current-opportunities.html" className="dropdown-link w-dropdown-link">CURRENT PROJECTS</a></nav>
                  </div><a href="about.html" className="navbarlink w-nav-link">About</a><a href="contact-us.html" className="navbarlink w-nav-link">Contact</a></nav>
                <div className="w-nav-button">
                  <div className="w-icon-nav-menu"></div>
                </div>
              </div>
            </div>
        );
    }
}
