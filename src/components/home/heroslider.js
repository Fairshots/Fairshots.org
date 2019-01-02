import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HeroSlider extends Component {
  render() {
    return (
      <div>
        <div className="hero-and-slider-section">
          <div className="darken" />
          <div className="hero-text-holder">
            <h1 data-ix="hero-sliding" className="hero-sentence">
              A better world one click at a time
            </h1>
            <h2 data-ix="hero-sliding-2" className="hero-undertittle">
              connecting socially engaged photographers with world changing NGOS
            </h2>
            <Link to="/register" className="join-button w-button">
              I WANT TO JOIN
            </Link>
            <p className="general-paragraph hero">
              Quickly while it is still free :)
            </p>
          </div>
          <div
            data-delay="6000"
            data-animation="slide"
            data-autoplay="1"
            data-duration="2500"
            data-infinite="1"
            className="homepageheroslider w-slider"
          >
            <div className="mask-darken w-slider-mask">
              <div className="w-slide">
                <img src="images/hero-shot.jpg" className="hero-slider-image" />
              </div>
              <div className="w-slide">
                <img
                  src="images/Fotolia_91498983_L.jpg"
                  className="hero-slider-image"
                />
              </div>
              <div className="w-slide">
                <img
                  src="images/carroussel_03.jpg"
                  className="hero-slider-image"
                />
              </div>
              <div className="w-slide">
                <img
                  src="images/Fotolia_75859919_L.jpg"
                  className="hero-slider-image"
                />
              </div>
              <div className="w-slide">
                <img
                  src="images/Fotolia_58758895_L.jpg"
                  className="hero-slider-image"
                />
              </div>
              <div className="w-slide">
                <img
                  src="images/Fotolia_93354406_L.jpg"
                  className="hero-slider-image"
                />
              </div>
            </div>
            <div className="w-slider-arrow-left">
              <div className="w-icon-slider-left" />
            </div>
            <div className="w-slider-arrow-right">
              <div className="w-icon-slider-right" />
            </div>
            <div className="slide-nav w-slider-nav" />
          </div>
        </div>
        <div className="hero-and-slider-section mobile">
          <div
            data-animation="slide"
            data-duration="1500"
            data-infinite="1"
            data-delay="3000"
            data-autoplay="1"
            className="homepageheroslider w-slider"
          >
            <div className="mask-darken w-slider-mask">
              <div className="w-slide">
                <img
                  src="images/Fairshots-mobile-slideshow-02.jpg"
                  className="hero-slider-image"
                />
              </div>
              <div className="w-slide">
                <img
                  src="images/Fairshots-mobile-slideshow-03.jpg"
                  className="hero-slider-image"
                />
              </div>
              <div className="w-slide">
                <img
                  src="images/Fairshots-mobile-slideshow.jpg"
                  className="hero-slider-image"
                />
              </div>
              <div className="w-slide">
                <img
                  src="images/Fairshots-mobile-slideshow-04.jpg"
                  className="hero-slider-image"
                />
              </div>
            </div>
          </div>
          <Link to="/register" className="join-button w-button">
            I WANT TO JOIN
          </Link>
        </div>
      </div>
    );
  }
}
