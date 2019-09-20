import React from "react";
import { Button } from "reactstrap";

const MailForm = errorMessage => (
    <div>
        <form id="mail-form">
            <label className="about-green-tittles">Subject</label>
            <input
                type="text"
                name="subject"
                id="subject"
                className={`form-control ${errorMessage ? "is-invalid" : ""}`}
            />
            <label className="about-green-tittles">Message:</label>
            <textarea
                id="Message"
                name="Message"
                className={`form-control ${errorMessage ? "is-invalid" : ""}`}
            />

            <Button color="success mt-3" type="submit">
                Send message
            </Button>
        </form>
    </div>
);

export default MailForm;
