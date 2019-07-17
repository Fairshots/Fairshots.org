import React from "react";
import {
    Input,
    Form,
    FormGroup,
    FormFeedback,
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
    Col
} from "reactstrap";

import {
    FacebookLoginButton,
    GoogleLoginButton,
    InstagramLoginButton
} from "react-social-login-buttons";

import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginModal(props) {
    return (
        <Modal
            name="loginModal"
            isOpen={props.showModal}
            toggle={() => props.showLoginModal("loginModal")}
        >
            <ModalHeader toggle={() => props.showLoginModal("loginModal")}>
                {" "}
                <h4> Please signin to access you account</h4>{" "}
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={props.handleSubmit}>
                    <Row className="justify-content-center">
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-2" style={{ width: "50%" }}>
                            <Input
                                type="email"
                                name="email"
                                id="Email"
                                placeholder="E-mail"
                                value={props.email}
                                onChange={props.handleChange}
                                invalid={props.errorMessage !== ""}
                            />
                        </FormGroup>
                    </Row>
                    <Row className="justify-content-center">
                        <FormGroup
                            className="form-group mb-2 mr-sm-2 mb-sm-2"
                            style={{ width: "50%" }}
                        >
                            {!props.forgotPass && (
                                <Input
                                    type="password"
                                    name="password"
                                    id="Password"
                                    placeholder="Password"
                                    value={props.password}
                                    onChange={props.handleChange}
                                    invalid={props.errorMessage !== ""}
                                />
                            )}
                            <FormFeedback>{props.errorMessage}</FormFeedback>
                        </FormGroup>
                    </Row>
                    <Row className="justify-content-center">
                        <a href="/#" className="general-paragraph" onClick={props.toggleForget}>
                            {props.forgotPass ? "I know my password" : "Forgot my password"}
                        </a>
                    </Row>
                    <Row className="justify-content-center">
                        {props.forgotPass && (
                            <p
                                className={props.notification ? "text-success" : "text-danger"}
                            >{`${props.notification || props.errorMessage}`}</p>
                        )}
                    </Row>
                    <Row className="justify-content-center m-2">
                        <Button
                            className="col-6"
                            type="submit"
                            color="success"
                            style={{ width: "50%" }}
                        >
                            {props.forgotPass ? "Send me an e-mail" : "Login"}
                        </Button>
                    </Row>

                    <Row className="justify-content-center m-2">
                        <h4>Or</h4>
                    </Row>
                    <Row className="justify-content-center m-2">
                        <FacebookLoginButton
                            style={{ "font-size": "16px", width: "50%" }}
                            iconSize="16px"
                            size="40px"
                            onClick={() => alert("Hello")}
                        />
                    </Row>
                    <Row className="justify-content-center m-2">
                        <GoogleLoginButton
                            style={{ "font-size": "16px", width: "50%" }}
                            iconSize="16px"
                            size="40px"
                            onClick={() => alert("Hello")}
                        />
                    </Row>
                    <Row className="justify-content-center m-2">
                        <InstagramLoginButton
                            style={{ "font-size": "16px", width: "50%" }}
                            iconSize="16px"
                            size="40px"
                            onClick={() => alert("Hello")}
                        />
                    </Row>
                </Form>
            </ModalBody>
        </Modal>
    );
}
