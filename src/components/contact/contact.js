import React from "react";
import { Row, Col, Form, FormGroup, Input, Button } from "reactstrap";

export default function Contact({
    uname,
    setUname,
    email,
    setEmail,
    message,
    setMessage,
    subject,
    setSubject,
    errorMessage,
    handleSubmit
}) {
    return (
        <div className="contact-us">
            <h3 className="about-green-tittles">Get in touch</h3>
            <Row>
                <Col onSubmit={handleSubmit}>
                    <Form>
                        <FormGroup>
                            <label className="about-green-tittles">Your Name:</label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-input"
                                value={uname}
                                onChange={e => {
                                    e.preventDefault();
                                    setUname(e.target.value);
                                }}
                                invalid={errorMessage !== "" && uname === ""}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label className="about-green-tittles">Your email address:</label>
                            <Input
                                type="Email"
                                className="w-input"
                                name="email"
                                placeholder="Enter your email address"
                                id="email"
                                value={email}
                                onChange={e => {
                                    e.preventDefault();
                                    setEmail(e.target.value);
                                }}
                                invalid={errorMessage !== "" && email === ""}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label className="about-green-tittles">
                                What would you like to do?
                            </label>
                            <Input
                                type="select"
                                id="Message-type"
                                name="Message-type"
                                required=""
                                className="w-select"
                                value={subject}
                                onChange={e => {
                                    e.preventDefault();
                                    setSubject(e.target.value);
                                }}
                                invalid={errorMessage !== "" && subject === ""}
                            >
                                <option value="Contact">I just want to say &#x27;Hi&#x27;</option>
                                <option value="Suggestion">I want to make a suggestion</option>
                                <option value="Feedback">I want to leave some feedback</option>
                                <option value="work">I want to work with Fairshots.org</option>
                                <option value="Question">I want to ask a question</option>
                                <option value="Other">Other</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <label className="about-green-tittles">Message:</label>
                            <Input
                                type="textarea"
                                id="Message"
                                name="Message"
                                placeholder="Type your message here"
                                className="message-text-box w-input"
                                value={message}
                                onChange={e => {
                                    e.preventDefault();
                                    setMessage(e.target.value);
                                }}
                                invalid={errorMessage !== "" && message === ""}
                            />
                        </FormGroup>
                        <div className="text-center mt-4">
                            <div className="text-danger" style={{ minHeight: "30px" }}>
                                {errorMessage}
                            </div>
                            <Button color="success" type="submit">
                                Contact
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col>
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
                </Col>
            </Row>
        </div>
    );
}
