import React from "react";
import { Container, Row, Button } from "reactstrap";

const ForwardSignup = ({ redirect }) => (
    <Container>
        <Row className="justify-content-center m-2">
            <p>
                A profile with the e-mail associated with this account was not found. You'll be
                redirected to signup page
            </p>
            <p>Are you a photographer or NGO?</p>
        </Row>

        <Row className="justify-content-center m-2">
            <Button
                onClick={e => {
                    e.preventDefault();
                    redirect("photographer");
                }}
                className="m-2"
                color="success"
            >
                Photographer
            </Button>
            <Button
                onClick={e => {
                    e.preventDefault();
                    redirect("organization");
                }}
                className="m-2"
                color="success"
            >
                Organization
            </Button>
        </Row>
    </Container>
);

export default ForwardSignup;
