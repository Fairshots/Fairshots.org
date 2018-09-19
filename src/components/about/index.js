import React from "react";
import Contact from "../contact";

export default function About(props) {
    return (
        <div>
            <div className="about-us-image-section"></div>
            <div className="content-section">
                <h3 className="portfolio-tittle">About us</h3>
                <div className="w-container">
                    <h4 className="about-green-tittles">What is fairshots?</h4>
                    <p className="general-paragraph">Simply put Fairshots is a platform that connects photographers and non-profit organizations. It makes it easy for organizations to browse and connect to photographer that are looking for world changing work, both globally and locally.</p>
                    <h4 className="about-green-tittles">our mission</h4>
                    <p className="general-paragraph">Our mission is to help photographers find important meaningful work at the same time that we provide a voice to organizations that are already doing this amazing work. We want to boost both the sense of self-worth within the photographic society, and the reach of organizations that are on the front-line of human affairs and social development. We believe a healthy and honest relationship between photographers and NGOS can bring benefits not only to themselves but also to the greater community.</p>
                    <h4 className="about-green-tittles">our vision</h4>
                    <p className="general-paragraph">Our vision is that in order to create significant systematic change on this planet, individuals have to take responsibility and be the actors of that change. We can no longer sit passively waiting for our leader or representatives to do as we want, we must take control of our lives by using the best of our skills and directing it towards the things we believe in. Fairshots is about giving that power to the photographic community of the world.</p>
                    <h4 className="about-green-tittles">why photography</h4>
                    <p className="general-paragraph">We believe photography is a very powerful art form, and it has the power to change deeply encrusted paradigms and beliefs in society as a whole. Yet many times when you choose to work with photography we end up having to work with things that are not so inline with our most important values just to be able to survive. In fact plenty of times the type of work done by professional photographers might even be propagating the stereotypes that go against those same values. We understand the value of photography and we want to shift it towards more socially responsible themes.</p>
                    <div className="team-div">
                        <h3 className="about-green-tittles">The team</h3>
                        <div className="w-dyn-list">
                            <div className="team-list w-dyn-items">
                                <div className="w-dyn-item">
                                    <div className="w-row">
                                        <div className="w-col w-col-2"><img className="team-member-image"/>
                                        </div>
                                        <div className="w-col w-col-10">
                                            <h3 className="profile-tittle"></h3>
                                            <div className="listing-subtittle page"></div>
                                            <p className="general-paragraph"></p>
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
                                    <div className="div-padding-10"><img src="images/5631eda93d7f56e20851fd1d_photograph15.png"/></div>
                                    <p>The best way photographer can help is by becoming a member and using your skill for the greater good. Browse around our website and you are certain to find something that you truly care about that could benefit from your skills.</p>
                                </div>
                            </div>
                            <div className="w-col w-col-3">
                                <div className="green-divs">
                                    <h4 className="green-box-tittle">organizations</h4>
                                    <div className="div-padding-10"><img src="images/5631edf1df5d6dd95adde0e4_marketing8.png"/></div>
                                    <p>Organizations can help by using our website to hire photographers. Also be sure to share this resource with as many nonprofits as possible. The larger the network the better off we&#x27;ll all be.</p>
                                </div>
                            </div>
                            <div className="w-col w-col-3">
                                <div className="green-divs">
                                    <h4 className="green-box-tittle">work with us</h4>
                                    <div className="div-padding-10"><img src="images/5631ee01296cdeed48928111_computers.png"/></div>
                                    <p>Currently we are all working on this project as volunteers but if you would like to help this project move forward we could use some assistance.  Programmers, Social network specialists, lawyers, admin &amp; operational people are always welcome to get in touch.</p>
                                </div>
                            </div>
                            <div className="w-col w-col-3">
                                <div className="green-divs">
                                    <h4 className="green-box-tittle">partners</h4>
                                    <div className="div-padding-10"><img src="images/5631ee0bdf5d6dd95adde0e7_agreement.png"/></div>
                                    <p>If your organization or business provides services for photographers or NGO&#x27;s and you think we could have a nice symbiosis then feel free to contact us.</p>
                                </div>
                            </div>
                        </div>
                        <h3 className="about-green-tittles">Or you can also make a donation</h3><a target="_blank" href="https://givealittle.co.nz/donate/cause/fairshotslaunch" className="contact-button w-button">Donate</a></div>
                    <div>
                        <div className="w-row">
                            <div className="w-col w-col-6">
                                <div className="faq">
                                    <h3 className="about-green-tittles">F.A.Q.</h3>
                                    <div>
                                        <h4 className="portfolio-tittle">FOR EVERYONE</h4>
                                        <div className="w-dyn-list">
                                            <div className="w-dyn-items">
                                                <div data-ix="faq-show-and-hide" className="w-dyn-item">
                                                    <h5 className="about-green-tittles faq"></h5>
                                                    <div className="faq-paragraph w-richtext"></div>
                                                </div>
                                            </div>
                                            <div className="w-dyn-empty">
                                                <p>No items found.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="portfolio-tittle">For OrGANIZATIONS</h4>
                                        <div className="w-dyn-list">
                                            <div className="w-dyn-items">
                                                <div data-ix="faq-show-and-hide" className="w-dyn-item">
                                                    <h5 className="about-green-tittles faq"></h5>
                                                    <div className="faq-paragraph w-richtext"></div>
                                                </div>
                                            </div>
                                            <div className="w-dyn-empty">
                                                <p>No items found.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="portfolio-tittle">For Photographers</h4>
                                        <div className="w-dyn-list">
                                            <div className="w-dyn-items">
                                                <div data-ix="faq-show-and-hide" className="w-dyn-item">
                                                    <h5 className="about-green-tittles faq"></h5>
                                                    <div className="faq-paragraph w-richtext"></div>
                                                </div>
                                            </div>
                                            <div className="w-dyn-empty">
                                                <p>No items found.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-col w-col-6"><img src="images/fairshots3.jpg" className="infographic"/></div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact/>

        </div>
    );
}
