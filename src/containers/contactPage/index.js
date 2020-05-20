import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { contactUs } from "../../actions";
import { Contact } from "../../components/contact";

const ContactPage = props => {
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(
        () => {
            setTimeout(() => setErrorMessage(""), 5000);
        },
        [errorMessage]
    );

    const handleSubmit = event => {
        event.preventDefault();

        if (uname === "" || email === "" || message === "") {
            setErrorMessage("Fields can not be blank");
        } else {
            props.doContactUs(uname, email, subject, message);
        }
    };

    return (
        <Contact
            uname={uname}
            setUname={setUname}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
            subject={subject}
            setSubject={setSubject}
            errorMessage={errorMessage}
            handleSubmit={handleSubmit}
        />
    );
};

const mapDispatchToProps = dispatch => ({
    doContactUs: (name, email, subject, message) => {
        dispatch(contactUs((name, email, subject, message)));
    }
});

export default connect(
    null,
    mapDispatchToProps
)(ContactPage);
