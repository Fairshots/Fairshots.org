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
    Row
} from "reactstrap";

export default function LoginModal(props) {
    return (
        <Modal
            name="loginModal"
            isOpen={props.showModal}
            toggle={() => props.showLoginModal("loginModal")}
        >
            <ModalHeader toggle={() => props.showLoginModal("loginModal")} />
            <ModalBody>
                <Form onSubmit={props.handleSubmit}>
                    <Row className="justify-content-center">
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
                    </Row>
                    <Row className="justify-content-center">
                        <FormGroup className="form-group mb-2 mr-sm-2 mb-sm-2">
                            {!props.forgotPass && (
                                <Input
                                    type="password"
                                    name="password"
                                    id="Password"
                                    placeholder="password"
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
                    <Row className="justify-content-center">
                        <Button type="submit" color="dark-green">
                            {props.forgotPass ? "Send me an e-mail" : "Login"}
                        </Button>
                    </Row>
                </Form>
            </ModalBody>
        </Modal>
    );
}
