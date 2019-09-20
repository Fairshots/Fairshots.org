import React from "react";
import { Contact } from "../contact";

import "./about.scss";

export default function About() {
    return (
        <div>
            <div className="about-us-image-section" />
            <div className="content-section">
                <h3 className="portfolio-tittle">About us</h3>
                <div className="w-container">
                    <h4 className="about-green-tittles">What is Fairshots?</h4>
                    <p className="general-paragraph">
                        Simply put Fairshots is a platform that connects photographers and
                        non-profit organizations. It makes it easy for organizations to browse and
                        connect to photographer that are looking for world changing work, both
                        globally and locally.
                    </p>
                    <h4 className="about-green-tittles">our mission</h4>
                    <p className="general-paragraph">
                        Our mission is to help photographers find important meaningful work at the
                        same time that we provide a voice to organizations that are already doing
                        this amazing work. We want to boost both the sense of self-worth within the
                        photographic society, and the reach of organizations that are on the
                        front-line of human affairs and social development. We believe a healthy and
                        honest relationship between photographers and NGOS can bring benefits not
                        only to themselves but also to the greater community.
                    </p>
                    <h4 className="about-green-tittles">our vision</h4>
                    <p className="general-paragraph">
                        Our vision is that in order to create significant systematic change on this
                        planet, individuals have to take responsibility and be the actors of that
                        change. We can no longer sit passively waiting for our leader or
                        representatives to do as we want, we must take control of our lives by using
                        the best of our skills and directing it towards the things we believe in.
                        Fairshots is about giving that power to the photographic community of the
                        world.
                    </p>
                    <h4 className="about-green-tittles">why photography</h4>
                    <p className="general-paragraph">
                        We believe photography is a very powerful art form, and it has the power to
                        change deeply encrusted paradigms and beliefs in society as a whole. Yet
                        many times when you choose to work with photography we end up having to work
                        with things that are not so inline with our most important values just to be
                        able to survive. In fact plenty of times the type of work done by
                        professional photographers might even be propagating the stereotypes that go
                        against those same values. We understand the value of photography and we
                        want to shift it towards more socially responsible themes.
                    </p>
                    <div className="team-div">
                        <h3 className="about-green-tittles">The team</h3>
                        <div className="w-dyn-list">
                            <div className="team-list w-dyn-items">
                                <div className="w-dyn-item">
                                    <div className="w-row">
                                        <div className="w-col w-col-2">
                                            <img className="team-member-image" />
                                        </div>
                                        <div className="w-col w-col-10">
                                            <h3 className="profile-tittle" />
                                            <div className="listing-subtittle page" />
                                            <p className="general-paragraph" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-dyn-empty">
                                <p>No items found.</p>
                            </div>
                        </div>
                    </div>
                    <div className="help-div">
                        <h3 className="about-green-tittles">How can you help?</h3>
                        <div className="w-row">
                            <div className="w-col w-col-3">
                                <div className="green-divs">
                                    <h4 className="green-box-tittle">photographers</h4>
                                    <div className="div-padding-10">
                                        <img src="images/5631eda93d7f56e20851fd1d_photograph15.png" />
                                    </div>
                                    <p>
                                        The best way photographer can help is by becoming a member
                                        and using your skill for the greater good. Browse around our
                                        website and you are certain to find something that you truly
                                        care about that could benefit from your skills.
                                    </p>
                                </div>
                            </div>
                            <div className="w-col w-col-3">
                                <div className="green-divs">
                                    <h4 className="green-box-tittle">organizations</h4>
                                    <div className="div-padding-10">
                                        <img src="images/5631edf1df5d6dd95adde0e4_marketing8.png" />
                                    </div>
                                    <p>
                                        Organizations can help by using our website to hire
                                        photographers. Also be sure to share this resource with as
                                        many nonprofits as possible. The larger the network the
                                        better off we&#x27;ll all be.
                                    </p>
                                </div>
                            </div>
                            <div className="w-col w-col-3">
                                <div className="green-divs">
                                    <h4 className="green-box-tittle">work with us</h4>
                                    <div className="div-padding-10">
                                        <img src="images/5631ee01296cdeed48928111_computers.png" />
                                    </div>
                                    <p>
                                        Currently we are all working on this project as volunteers
                                        but if you would like to help this project move forward we
                                        could use some assistance. Programmers, Social network
                                        specialists, lawyers, admin &amp; operational people are
                                        always welcome to get in touch.
                                    </p>
                                </div>
                            </div>
                            <div className="w-col w-col-3">
                                <div className="green-divs">
                                    <h4 className="green-box-tittle">partners</h4>
                                    <div className="div-padding-10">
                                        <img src="images/5631ee0bdf5d6dd95adde0e7_agreement.png" />
                                    </div>
                                    <p>
                                        If your organization or business provides services for
                                        photographers or NGO&#x27;s and you think we could have a
                                        nice symbiosis then feel free to contact us.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h3 className="about-green-tittles">Or you can also make a donation</h3>
                        <a
                            target="_blank"
                            href="https://givealittle.co.nz/donate/cause/fairshotslaunch"
                            className="contact-button w-button"
                        >
                            Donate
                        </a>
                    </div>
                    <div>
                        <div className="w-row">
                            <div className="w-col w-col-6">
                                <div className="faq">
                                    <h3 className="about-green-tittles">F.A.Q.</h3>
                                    <div>
                                        <h4 className="portfolio-tittle">FOR EVERYONE</h4>
                                        <div className="w-dyn-list">
                                            <div className="w-dyn-items">
                                                <div
                                                    data-ix="faq-show-and-hide"
                                                    className="w-dyn-item"
                                                >
                                                    <h5 className="about-green-tittles faq">
                                                        &gt;How come there are only a few FAQ?
                                                    </h5>
                                                    <div
                                                        className="faq-paragraph w-richtext"
                                                        style={{ height: "auto" }}
                                                    >
                                                        <p>
                                                            Well the website is very new and people
                                                            have not asked that many questions yet.
                                                            But if you can't find your answers here
                                                            use the contact form below to ask us
                                                            anything.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    data-ix="faq-show-and-hide"
                                                    className="w-dyn-item"
                                                >
                                                    <h5 className="about-green-tittles faq">
                                                        &gt;Can I register from any country?
                                                    </h5>
                                                    <div
                                                        className="faq-paragraph w-richtext"
                                                        style={{ height: "auto" }}
                                                    >
                                                        <p>Go ahead. We don't see why not.</p>
                                                    </div>
                                                </div>
                                                <div
                                                    data-ix="faq-show-and-hide"
                                                    className="w-dyn-item"
                                                >
                                                    <h5 className="about-green-tittles faq">
                                                        &gt; Do I have to pay anything to be a
                                                        member?
                                                    </h5>
                                                    <div
                                                        className="faq-paragraph w-richtext"
                                                        style={{ height: "auto" }}
                                                    >
                                                        <p>
                                                            Not quite yet. Fairshots is still on a
                                                            beta (testing) phase and we are keeping
                                                            things free until we figure out which
                                                            way this is going to grow. In saying
                                                            that we do have some costs associated
                                                            with maintaining this website so
                                                            donations are welcome.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="portfolio-tittle">For OrGANIZATIONS</h4>
                                        <div className="w-dyn-items">
                                            <div data-ix="faq-show-and-hide" className="w-dyn-item">
                                                <h5 className="about-green-tittles faq">
                                                    &gt;What if we don't want to hire any of the
                                                    photographers that have applied for an
                                                    opportunity?
                                                </h5>
                                                <div
                                                    className="faq-paragraph w-richtext"
                                                    style={{ height: "auto" }}
                                                >
                                                    <p>
                                                        That is fine. You are under no obligation to
                                                        hire anyone.
                                                    </p>
                                                </div>
                                            </div>
                                            <div data-ix="faq-show-and-hide" className="w-dyn-item">
                                                <h5 className="about-green-tittles faq">
                                                    &gt;How do I choose the best photographer for my
                                                    project?
                                                </h5>
                                                <div
                                                    className="faq-paragraph w-richtext"
                                                    style={{ height: "auto" }}
                                                >
                                                    <p>
                                                        It depends. Like most things in life "the
                                                        best" is a matter or reference. The best
                                                        person to shoot at a war torn country might
                                                        not be the same best person &nbsp;to get
                                                        your corporate head-shots (or not). We
                                                        recommend you visit the photographer's
                                                        profile and judge by yourself if what he/she
                                                        has to say with his or hers pictures and
                                                        description is aligned with your
                                                        organization's values.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                            <div data-ix="faq-show-and-hide" className="w-dyn-item">
                                                <h5 className="about-green-tittles faq">
                                                    &gt;What's the main difference between projects
                                                    that are funded vs projects that have nothing?
                                                </h5>
                                                <div
                                                    className="faq-paragraph w-richtext"
                                                    style={{ height: "auto" }}
                                                >
                                                    <p>
                                                        Projects that are funded have a better
                                                        chance of attracting the right photographer
                                                        as it won't incur on a big sacrifice on the
                                                        photographer's end, meaning more
                                                        photographers will be available. But in
                                                        saying that we recommend you look at your
                                                        other non monetary resources and articulate
                                                        what is is that you can offer. It might just
                                                        more precious than you think.
                                                    </p>
                                                </div>
                                            </div>
                                            <div data-ix="faq-show-and-hide" className="w-dyn-item">
                                                <h5 className="about-green-tittles faq">
                                                    &gt; Why would a photographer shoot for my
                                                    organization when we don't have any funds
                                                    available?
                                                </h5>
                                                <div
                                                    className="faq-paragraph w-richtext"
                                                    style={{ height: "auto" }}
                                                >
                                                    <p>
                                                        You have to remember that professional
                                                        photographer are also artist and like to
                                                        have personal project. It might just be the
                                                        case the project he or she is working on is
                                                        in line with your organization's line of
                                                        work. Besides there is always a possibility
                                                        that you can use the images created to raise
                                                        funds and then reward the photographer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="portfolio-tittle">For Photographers</h4>
                                        <div className="w-dyn-list">
                                            <div className="w-dyn-items">
                                                <div
                                                    data-ix="faq-show-and-hide"
                                                    className="w-dyn-item"
                                                >
                                                    <h5 className="about-green-tittles faq">
                                                        &gt;How do I apply for an opportunity?
                                                    </h5>
                                                    <div
                                                        className="faq-paragraph w-richtext"
                                                        style={{ height: "auto" }}
                                                    >
                                                        <p>
                                                            First make sure you are already
                                                            registered. Then visit an opportunity
                                                            and click on the big green button that
                                                            says 'Help this cause'.
                                                        </p>
                                                        /div>
                                                    </div>
                                                    <div
                                                        data-ix="faq-show-and-hide"
                                                        className="w-dyn-item"
                                                    >
                                                        <h5 className="about-green-tittles faq">
                                                            &gt;Can I apply for job opportunities
                                                            outside my area?{" "}
                                                        </h5>
                                                        <div
                                                            className="faq-paragraph w-richtext"
                                                            style={{ height: "auto" }}
                                                        >
                                                            <p>
                                                                Yes, but on the opportunity
                                                                description you will find the
                                                                organizations preference. &nbsp;We
                                                                recommend that you follow their
                                                                preference. If you will be
                                                                travelling to the area where the job
                                                                will happen that might be worth
                                                                mentioning when applying.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-ix="faq-show-and-hide"
                                                        className="w-dyn-item"
                                                    >
                                                        <h5 className="about-green-tittles faq">
                                                            &gt; How do you distinguish
                                                            professionals from amateur from
                                                            students?
                                                        </h5>
                                                        <div
                                                            className="faq-paragraph w-richtext"
                                                            style={{ height: "auto" }}
                                                        >
                                                            <p>
                                                                A professional photographer is
                                                                anyone who generates income from
                                                                working with photography. An amateur
                                                                photographer is someone who might
                                                                have plenty of skills but does not
                                                                necessarily works with photography.
                                                                A student is someone who is studying
                                                                photography.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-ix="faq-show-and-hide"
                                                        className="w-dyn-item"
                                                    >
                                                        <h5 className="about-green-tittles faq">
                                                            &gt; Can anyone apply to become a listed
                                                            photographer?{" "}
                                                        </h5>
                                                        <div className="faq-paragraph w-richtext">
                                                            <p>
                                                                Yes, everyone can apply. But we do
                                                                check to see if what you are saying
                                                                is consistent to what we see in your
                                                                portfolio. If it is not up to
                                                                standards we might refuse your
                                                                application.{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-ix="faq-show-and-hide"
                                                        className="w-dyn-item"
                                                    >
                                                        <h5 className="about-green-tittles faq">
                                                            &gt; Who owns the pictures created from
                                                            fairshots assignments?
                                                        </h5>
                                                        <div className="faq-paragraph w-richtext">
                                                            <p>
                                                                We leave that up to you. You can
                                                                choose to maintaing all the rights
                                                                for the images your create or give
                                                                the organization right to it. We
                                                                won't mess around with your personal
                                                                preferences.{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-col w-col-6">
                                    <img src="images/fairshots3.jpg" className="infographic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Contact />
            </div>
        </div>
    );
}
