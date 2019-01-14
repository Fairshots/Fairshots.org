import React from "react";

export default function Contact(props) {
    return (
        <div className="contact-us">
            <h3 className="about-green-tittles">Get in touch</h3>
            <div className="w-row">
                <div className="w-col w-col-6">
                    <div className="w-form">
                        <form
                            id="wf-form-Contact-us"
                            name="wf-form-Contact-us"
                            data-name="Contact us"
                        >
                            <label for="name" className="about-green-tittles">
                                Your Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                data-name="Name"
                                placeholder="Enter your name"
                                maxlength="256"
                                className="w-input"
                            />
                            <label for="email" className="about-green-tittles">
                                Your email address:
                            </label>
                            <input
                                type="email"
                                className="w-input"
                                maxlength="256"
                                name="email"
                                data-name="Email"
                                placeholder="Enter your email address"
                                id="email"
                                required=""
                            />
                            <label for="Message-type" className="about-green-tittles">
                                What would you like to do?
                            </label>
                            <select
                                id="Message-type"
                                name="Message-type"
                                data-name="Message type"
                                required=""
                                className="w-select"
                            >
                                <option value="Contact">I just want to say &#x27;Hi&#x27;</option>
                                <option value="Suggestion">I want to make a suggestion</option>
                                <option value="Feedback">I want to leave some feedback</option>
                                <option value="work">I want to work with Fairshots.org</option>
                                <option value="Question">I want to ask a question</option>
                                <option value="Other">Other</option>
                            </select>
                            <label for="Message" className="about-green-tittles">
                                Message:
                            </label>
                            <textarea
                                id="Message"
                                name="Message"
                                placeholder="Type your message here"
                                maxlength="5000"
                                data-name="Message"
                                required=""
                                className="message-text-box w-input"
                            />
                            <div className="w-embed w-script" />
                            <input
                                type="submit"
                                value="Contact"
                                data-wait="The pigeon is on his way..."
                                wait="The pigeon is on his way..."
                                className="contact-button w-button"
                            />
                        </form>
                        <div className="w-form-done">
                            <p className="featured-listing-bold-black">
                                Thanks for your message!
                                <br /> We will try to get back to you asap but you never know :)
                            </p>
                        </div>
                        <div className="featured-listing-bold-black w-form-fail">
                            <p>Oops! Something went wrong while submitting the form</p>
                        </div>
                    </div>
                </div>
                <div className="w-col w-col-6">
                    <h4 className="about-green-tittles">Get Social</h4>
                    <a
                        href="mailto:contact@fairshots.org?subject=Contact%20from%20the%20website"
                        className="text-link"
                    >
                        Contact@fairshots.org
                    </a>
                    <a
                        href="https://www.facebook.com/fairshots.org/"
                        target="_blank"
                        className="text-link"
                    >
                        facebook.com/fairshots.org
                    </a>
                </div>
            </div>
        </div>
    );
}
