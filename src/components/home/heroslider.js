import React, { Component } from "react";

export default class HeroSlider extends Component {
    render() {
        return (
          <div>
            <div class="hero-and-slider-section">
              <div class="darken"></div>
              <div class="hero-text-holder">
                <h1 data-ix="hero-sliding" class="hero-sentence">A better world one click at a time</h1>
                <h2 data-ix="hero-sliding-2" class="hero-undertittle">connecting socially engaged photographers with world changing NGOS</h2><a href="register.html" class="join-button w-button">I WANT TO JOIN</a>
                <p class="general-paragraph hero">Quickly while it is still free :)</p>
              </div>
              <div data-delay="3000" data-animation="slide" data-autoplay="1" data-duration="1500" data-infinite="1" class="homepageheroslider w-slider">
                <div class="mask-darken w-slider-mask">
                  <div class="w-slide"><img src="images/hero-shot.jpg" class="hero-slider-image"/></div>
                  <div class="w-slide"><img src="images/Fotolia_91498983_L.jpg" class="hero-slider-image"/></div>
                  <div class="w-slide"><img src="images/carroussel_03.jpg" class="hero-slider-image"/></div>
                  <div class="w-slide"><img src="images/Fotolia_75859919_L.jpg" class="hero-slider-image"/></div>
                  <div class="w-slide"><img src="images/Fotolia_58758895_L.jpg" class="hero-slider-image"/></div>
                  <div class="w-slide"><img src="images/Fotolia_93354406_L.jpg" class="hero-slider-image"/></div>
                </div>
                <div class="w-slider-arrow-left">
                  <div class="w-icon-slider-left"></div>
                </div>
                <div class="w-slider-arrow-right">
                  <div class="w-icon-slider-right"></div>
                </div>
                <div class="slide-nav w-slider-nav"></div>
              </div>
            </div>
            <div class="hero-and-slider-section mobile">
              <div data-animation="slide" data-duration="1500" data-infinite="1" data-delay="3000" data-autoplay="1" class="homepageheroslider w-slider">
                <div class="mask-darken w-slider-mask">
                  <div class="w-slide"><img src="images/Fairshots-mobile-slideshow-02.jpg" class="hero-slider-image"/></div>
                  <div class="w-slide"><img src="images/Fairshots-mobile-slideshow-03.jpg" class="hero-slider-image"/></div>
                  <div class="w-slide"><img src="images/Fairshots-mobile-slideshow.jpg" class="hero-slider-image"/></div>
                  <div class="w-slide"><img src="images/Fairshots-mobile-slideshow-04.jpg" class="hero-slider-image"/></div>
                </div>
              </div><a href="register.html" class="join-button w-button">I WANT TO JOIN</a></div>
          </div>
        );
    }
}
