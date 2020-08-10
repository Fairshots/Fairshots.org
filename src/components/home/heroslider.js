import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UncontrolledCarousel, Container } from "reactstrap";

import "./heroslider.scss";

export default class HeroSlider extends Component {
    state = {
        items: [
            {
                src: "images/hero-shot.jpg",
                header: "",
                caption: ""
            },
            {
                src: "images/Fotolia_91498983_L.jpg",
                header: "",
                caption: ""
            },
            {
                src: "images/carroussel_03.jpg",
                header: "",
                caption: ""
            },
            {
                src: "images/Fotolia_75859919_L.jpg",
                header: "",
                caption: ""
            },
            {
                src: "images/Fotolia_58758895_L.jpg",
                header: "",
                caption: ""
            },
            {
                src: "images/Fotolia_93354406_L.jpg",
                header: "",
                caption: ""
            }
        ],
        items_mobile: [
            {
                src: "images/Fairshots-mobile-slideshow-02.jpg",
                header: "",
                caption: ""
            },
            {
                src: "images/Fairshots-mobile-slideshow-03.jpg",
                header: "",
                caption: ""
            },
            {
                src: "images/Fairshots-mobile-slideshow.jpg",
                header: "",
                caption: ""
            },
            {
                src: "images/Fairshots-mobile-slideshow-04.jpg",
                header: "",
                caption: ""
            }
        ],
        screenSize: 1024
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ screenSize: window.innerWidth });
    };

    render() {
        return (
            <div className="hero-slider">
                {this.state.screenSize > 768 && <div className="darken" />}
                <Container fluid>
                    <UncontrolledCarousel
                        items={
                            this.state.screenSize > 768 ? this.state.items : this.state.items_mobile
                        }
                    />
                </Container>

                <div className="hero-text-holder">
                    {this.state.screenSize > 768 && (
                        <div>
                            <h1 className="hero-sentence">A better world one click at a time</h1>
                            <h2 className="hero-undertitle">
                                connecting socially engaged photographers with world changing NGOS
                            </h2>
                        </div>
                    )}
                    <div className="join-button-and-text">
                        <Link to="/register" className="join-button w-button">
                            I WANT TO JOIN
                        </Link>
                        <p className="general-paragraph hero">Quickly while it is still free :)</p>
                    </div>
                </div>
            </div>
        );
    }
}
