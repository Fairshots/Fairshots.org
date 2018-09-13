import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input
} from "reactstrap";

import { Field, reduxForm } from "redux-form";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    renderField({
        input, label, type, meta: { touched, error, warning }
    }) {
        return (
            <div>
                <label>{label}</label>
                <div>
                    <Input {...input} placeholder={label} type={type}/>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        );
    }

    render() {
        const {
            doLogin, isAuthenticated, errorMessage
        } = this.props;
        return (
            <Modal isOpen={this.props.showForm} toggle={this.props.toggleForm}>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Field name="name" label="Name: " component={this.renderField} type="text" />
                        </FormGroup>
                        <FormGroup>
                            <Field name="email" label="E-mail: " component={this.renderField} type="Email" />
                        </FormGroup>
                        <button type="submit">Submit</button>
                    </Form>

                </ModalBody>
            </Modal>
        );
    }
}
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = "Required";
    }
    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    return errors;
};

export default reduxForm({
    form: "registerNewForm",
    validate
})(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
