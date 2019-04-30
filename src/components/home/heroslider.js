import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UncontrolledCarousel, Container } from "reactstrap";
import "./heroslider.scss";

export default class HeroSlider extends Component {
    state = {
        items: [
            {
                src: "images/hero-shot.jpg",
                header: ""
            },
            {
                src: "images/Fotolia_91498983_L.jpg",
                header: ""
            },
            {
                src: "images/carroussel_03.jpg",
                header: ""
            },
            {
                src: "images/Fotolia_75859919_L.jpg",
                header: ""
            },
            {
                src: "images/Fotolia_58758895_L.jpg",
                header: ""
            },
            {
                src: "images/Fotolia_93354406_L.jpg",
                header: ""
            }
        ],
        items_mobile: [
            {
                src: "images/Fairshots-mobile-slideshow-02.jpg",
                header: ""
            },
            {
                src: "images/Fairshots-mobile-slideshow-03.jpg",
                header: ""
            },
            {
                src: "images/Fairshots-mobile-slideshow.jpg",
                header: ""
            },
            {
                src: "images/Fairshots-mobile-slideshow-04.jpg",
                header: ""
            }
        ]
    };

    render() {
        return (
            <div className="hero-slider">
                <div className="darken" />
                <Container>
                    <UncontrolledCarousel
                        // eslint-disable-next-line no-restricted-globals
                        items={screen.width > 500 ? this.state.items : this.state.items_mobile}
                    />
                    <div className="join-button-and-text">
                        <Link to="/register" className="join-button w-button">
                            I WANT TO JOIN
                        </Link>
                        <p className="general-paragraph hero">Quickly while it is still free :)</p>
                    </div>
                </Container>
                <div className="hero-text-holder">
                    <h1 className="hero-sentence">A better world one click at a time</h1> />
                    <h2 class="hero-undertitle">
                        connecting socially engaged photographers with world changing NGOS
                    </h2>
                </div>
            </div>
        );
    }
}
