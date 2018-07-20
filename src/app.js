import React, { Component } from "react";

export default class App extends Component {
    render() {
        return (
<div>
  <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">
    <div class="w-container"><a href="index.html" class="brand w-nav-brand"><img src="images/Fair-shotsV3.png" width="250"/></a>
      <nav role="navigation" class="nav-menu w-nav-menu">
        <div data-delay="0" data-hover="1" class="navbarlink w-dropdown">
          <div class="navbarlink w-dropdown-toggle">
            <div>Organizations</div>
            <div class="w-icon-dropdown-toggle"></div>
          </div>
          <nav class="w-dropdown-list"><a href="register.html" class="dropdown-link w-dropdown-link">register an organization</a><a href="create-a-project.html" class="dropdown-link w-dropdown-link">create a NEW PROJECT</a><a href="photographers.html" class="dropdown-link w-dropdown-link">find a photographer</a></nav>
        </div>
        <div data-delay="0" data-hover="1" class="navbarlink w-dropdown">
          <div class="navbarlink w-dropdown-toggle">
            <div>photographers</div>
            <div class="w-icon-dropdown-toggle"></div>
          </div>
          <nav class="w-dropdown-list"><a href="register.html" class="dropdown-link w-dropdown-link">register as a photographer</a><a href="organizations.html" class="dropdown-link w-dropdown-link">find an ngo</a><a href="current-opportunities.html" class="dropdown-link w-dropdown-link">CURRENT PROJECTS</a></nav>
        </div><a href="about.html" class="navbarlink w-nav-link">About</a><a href="contact-us.html" class="navbarlink w-nav-link">Contact</a></nav>
      <div class="w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
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
  <div class="content-section">
    <div class="w-row">
      <div class="home-page-column w-col w-col-6"><img src="images/5631eda93d7f56e20851fd1d_photograph15.png" width="80" data-ix="grow-on-scroll" class="home-page-symbols"/>
        <h2 class="home-page-heading2">Photographers</h2>
        <p class="general-paragraph">Here you can find organisations working for a a good cause that need to get their message across using your great expertise.</p><a href="current-opportunities.html" class="text-link">FIND A PURPOSE FILLED PROJECT THAT NEEDS YOUR VISION</a></div>
      <div class="home-page-column w-col w-col-6"><img src="images/org-logo-home-64px.png" width="80" data-ix="grow-on-scroll" class="home-page-symbols"/>
        <h2 class="home-page-heading2">Organizations</h2>
        <p class="general-paragraph">Find a photographer that truly cares about your cause and knows how to get the message across visually.</p><a href="photographers.html" class="text-link">browse our photographers directory</a></div>
    </div>
  </div>
  <div class="so-far-banner">
    <div class="so-far-div w-clearfix">
      <p class="so-far-paragraph">WE HAVE 37 PHOTOGRAPHERS FROM AROUND THE GLOBE  AND 16 ORGANIzATIONS LOOKING to COLLABORATE!</p>
      <p class="updates-small-paragraph">FAIRSHOTS is successfully CONNECting PHOTOGRAPHERS TO  NGOS in:</p>
      <div class="dynamic-countries-list w-dyn-list">
        <div class="w-clearfix w-dyn-items">
          <div class="dynamic-countries-list w-clearfix w-dyn-item"><a class="get-country"></a>
            <div class="get-country">,</div>
          </div>
        </div>
        <div class="w-dyn-empty">
          <p>No items found.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="featured">
    <div class="collection-list-wrapper w-dyn-list">
      <div class="w-dyn-items w-row">
        <div data-ix="grow-on-scroll" class="w-dyn-item w-col w-col-4">
          <a class="listing-link w-inline-block">
            <div data-ix="hover-description" class="feauture-listing-div">
              <div class="hover-description-div">
                <div></div>
              </div>
              <div class="listing-category-box">
                <div></div>
              </div>
            </div>
            <div class="feature-content-div jobs">
              <div class="w-row">
                <div class="w-col w-col-3 w-col-small-3 w-col-tiny-3">
                  <div class="feature-listing-author"></div>
                </div>
                <div class="w-clearfix w-col w-col-9 w-col-small-9 w-col-tiny-9">
                  <h1 class="feature-listing-tittle"></h1>
                  <div class="feauture-listing-subtittle"></div>
                  <div class="feauture-based-in"></div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="w-dyn-empty">
        <p>No items found.</p>
      </div>
    </div>
    <h2 class="feautured-h3">Featured photographers</h2>
    <div class="w-dyn-list">
      <div class="w-dyn-items w-row">
        <div data-ix="grow-on-scroll" class="w-dyn-item w-col w-col-4">
          <a class="listing-link w-inline-block">
            <div data-ix="hover-description" class="feauture-listing-div">
              <div class="hover-description-div">
                <div></div>
              </div>
            </div>
            <div class="feature-content-div">
              <div class="w-row">
                <div class="w-col w-col-3 w-col-tiny-3 w-col-small-3">
                  <div class="feature-listing-author"></div>
                </div>
                <div class="w-clearfix w-col w-col-9 w-col-tiny-9 w-col-small-9">
                  <h1 class="feature-listing-tittle"></h1>
                  <div class="feauture-listing-subtittle"></div>
                  <div class="feauture-based-in"></div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="w-dyn-empty">
        <p>No items found.</p>
      </div>
    </div><a href="photographers.html" class="text-link see-all">see all available photographers</a>
    <h2 class="feautured-h3">Featured ORGANIZATIONS</h2>
    <div class="w-dyn-list">
      <div class="w-dyn-items w-row">
        <div data-ix="grow-on-scroll" class="dynamic-item-30 w-dyn-item w-col w-col-4">
          <a class="listing-link w-inline-block">
            <div data-ix="hover-description" class="feauture-listing-div organization">
              <div class="listing-category-box">
                <div></div>
              </div>
              <div class="hover-description-div">
                <div></div>
              </div>
            </div>
            <div class="feature-content-div organization w-clearfix">
              <h1 class="feature-listing-tittle organizations"></h1>
              <div class="feauture-based-in">Based in</div>
              <div class="feauture-based-in"></div>
            </div>
          </a>
        </div>
      </div>
      <div class="w-dyn-empty">
        <p>No items found.</p>
      </div>
    </div><a href="organizations.html" class="text-link see-all">see all available ORGANIZATIONS</a></div>
  <div class="content-section">
    <div class="w-container">
      <h3 class="portfolio-tittle">BE PART OF THE CHANGE</h3>
      <p>Joining Fairshots is free, easy and open to photographers and organizations anywhere around the world. Start by clicking the button below that is most relevant to you. Easy Peasy.</p>
      <div data-duration-in="300" data-duration-out="100" class="w-tabs">
        <div class="register-tab-menu w-tab-menu">
          <a data-w-tab="Tab 1" class="tab-link register w-inline-block w-tab-link">
            <div>JOIN AS AN organization</div><img src="images/Dark_Green_Arrow_Up.png" data-ix="tab-arrow" class="tab-arrow"/></a>
          <a data-w-tab="Tab 2" class="tab-link register w-inline-block w-tab-link">
            <div>JOIN AS a photographer</div><img src="images/Dark_Green_Arrow_Up.png" data-ix="tab-arrow" class="tab-arrow"/></a>
        </div>
        <div class="w-tab-content">
          <div data-w-tab="Tab 1" class="w-tab-pane">
            <div class="external-forms w-embed w-script">
              <script type="text/javascript" src="https://form.jotform.co/jsform/61306893090860"></script>
            </div>
          </div>
          <div data-w-tab="Tab 2" class="w-tab-pane">
            <div class="external-forms w-embed w-script">
              <script type="text/javascript" src="https://form.jotform.co/jsform/61303237479860"></script>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="w-row">
      <div class="w-col w-col-3">
        <h4 class="footer-categories">Organizations</h4><a href="register.html" class="footer-links">Register</a><a href="photographers.html" class="footer-links">Find a photographer for your cause</a><a href="create-a-project.html" class="footer-links">Create a new PROJECT</a></div>
      <div class="w-col w-col-3">
        <h4 class="footer-categories">Photographers</h4><a href="register.html" class="footer-links">Register</a><a href="organizations.html" class="footer-links">FIND NGOS to WOrk with</a></div>
      <div class="w-col w-col-3">
        <h4 class="footer-categories">Fairshots.org</h4><a href="about.html" class="footer-links">About us - FAQ</a><a href="terms-and-conditions.html" class="footer-links">Terms and conditions</a><a href="#" class="footer-links">Contact us</a></div>
      <div class="w-col w-col-3">
        <h4 class="footer-categories">Get Social</h4><a href="https://www.facebook.com/fairshots.org/" target="_blank" class="w-inline-block"><img src="images/facebook.png" class="social-icon-footer"/></a></div>
    </div>
    <h4 class="footer-categories donation">If you like our website and want to see us develop further please help by making a donation below.</h4><a target="_blank" class="contact-button w-button">Donate</a></div>
</div>
        );
    }
}
