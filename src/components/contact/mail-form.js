import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const MailForm = props => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(
        () => {
            setTimeout(() => setErrorMessage(""), 5000);
        },
        [errorMessage]
    );

    useEffect(
        () => {
            if (props.messaging.error)
                setErrorMessage(
                    "There was a problem with your request. Verify if you're logged in or try again later"
                );
        },
        [props.messaging.error]
    );

    const handleSubmit = event => {
        event.preventDefault();

        if (subject === "" || message === "") {
            setErrorMessage("Fields can not be blank");
        } else {
            props.sendMessage(subject, message);
        }
    };

    return (
        <div>
            <form id="mail-form" onSubmit={handleSubmit}>
                <label className="about-green-tittles">Subject</label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    className={`form-control ${errorMessage ? "is-invalid" : ""}`}
                    value={subject}
                    onChange={event => {
                        event.preventDefault();
                        setSubject(event.target.value);
                    }}
                />
                <label className="about-green-tittles">Message:</label>
                <textarea
                    id="Message"
                    name="Message"
                    className={`form-control ${errorMessage ? "is-invalid" : ""}`}
                    value={message}
                    onChange={event => {
                        event.preventDefault();
                        setMessage(event.target.value);
                    }}
                />
                <div className="invalid-feedback">{errorMessage}</div>
                {props.messaging.accepted && (
                    <p className="text-success" style={{ minHeight: "30px" }}>
                        Your message was sent successfully.
                    </p>
                )}
                <Button color="success mt-3" type="submit">
                    Send message
                </Button>
            </form>
        </div>
    );
};

export default MailForm;
