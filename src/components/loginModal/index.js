import React from "react";
import { Input, Form, FormGroup, FormFeedback } from "reactstrap";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBRow } from "mdbreact";

export default function LoginModal(props) {
    return (
        <MDBModal
            name="loginModal"
            isOpen={props.showModal}
            toggle={() => props.showLoginModal("loginModal")}
        >
            <MDBModalHeader toggle={() => props.showLoginModal("loginModal")} />
            <MDBModalBody>
                <Form onSubmit={props.handleSubmit}>
                    <MDBRow className="justify-content-center">
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                            <Input
                                type="email"
                                name="email"
                                id="Email"
                                placeholder="e-mail"
                                value={props.email}
                                onChange={props.handleChange}
                                invalid={props.errorMessage !== ""}
                            />
                        </FormGroup>
                    </MDBRow>
                    <MDBRow className="justify-content-center">
                        <FormGroup className="form-group mb-2 mr-sm-2 mb-sm-2">
                            <Input
                                type="password"
                                name="password"
                                id="Password"
                                placeholder="password"
                                value={props.password}
                                onChange={props.handleChange}
                                invalid={props.errorMessage !== ""}
                            />
                            <FormFeedback>{props.errorMessage}</FormFeedback>
                        </FormGroup>
                    </MDBRow>
                    <MDBRow className="justify-content-center">
                        <a href="/forgot" className="general-paragraph">
                            Forgot my password
                        </a>
                    </MDBRow>
                    <MDBRow className="justify-content-center">
                        <MDBBtn type="submit" color="dark-green">
                            Login
                        </MDBBtn>
                    </MDBRow>
                </Form>
            </MDBModalBody>
        </MDBModal>
    );
}
