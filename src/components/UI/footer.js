import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="w-row">
                    <div className="w-col w-col-3">
                        <h4 className="footer-categories">Organizations</h4>
                        <Link to="/register" className="footer-links">
                            Register
                        </Link>
                        <a href="photographers.html" className="footer-links">
                            Find a photographer for your cause
                        </a>
                        <a href="create-a-project.html" className="footer-links">
                            Create a new PROJECT
                        </a>
                    </div>
                    <div className="w-col w-col-3">
                        <h4 className="footer-categories">Photographers</h4>
                        <Link to="/register" className="footer-links">
                            Register
                        </Link>
                        <a href="organizations.html" className="footer-links">
                            FIND NGOS to WOrk with
                        </a>
                    </div>
                    <div className="w-col w-col-3">
                        <h4 className="footer-categories">Fairshots.org</h4>
                        <Link to="/about" className="footer-links">
                            About
                        </Link>
                        <Link to="/terms-and-conditions" className="footer-links">
                            Terms and conditions
                        </Link>
                        <Link to="/contact-us" className="footer-links">
                            Contact Us
                        </Link>
                    </div>
                    <div className="w-col w-col-3">
                        <h4 className="footer-categories">Get Social</h4>
                        <a
                            href="https://www.facebook.com/fairshots.org/"
                            target="_blank"
                            className="w-inline-block"
                        >
                            <img src="images/facebook.png" className="social-icon-footer" />
                        </a>
                    </div>
                </div>
                <h4 className="footer-categories donation">
                    If you like our website and want to see us develop further please help by making
                    a donation below.
                </h4>
                <a target="_blank" className="contact-button w-button">
                    Donate
                </a>
            </div>
        );
    }
}
