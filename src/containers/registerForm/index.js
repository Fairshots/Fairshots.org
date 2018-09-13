import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, FormFeedback, Input, Button
} from "reactstrap";

import { Field, reduxForm } from "redux-form";

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    renderField({
        input, label, type, meta: { touched, error, warning }
    }) {
        return (
            <FormGroup>
                <label>{label}</label>
                <Input {...input} type={type} invalid={touched && error}/>
                {touched && (error && <FormFeedback>{error}</FormFeedback>)}
            </FormGroup>
        );
    }

    render() {
        return (
            <Modal isOpen={this.props.showForm} toggle={this.props.toggleForm}>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <Field name="name" label="Name: " component={this.renderField} type="text" />
                        <Field name="email" label="E-mail: " component={this.renderField} type="Email" />
                        <Field name="password" label="Password: " component={this.renderField} type="Password" />
                        <Field name="pictUrl" label="Picture: " component={this.renderField} type="file" />
                        <Field name="skill" label="Skill Level: " component={this.renderField} type="select" />
                        <Field name="biography" label="Biography: " component={this.renderField} type="textarea" />
                        <Field name="webpage" label="Webpage: " component={this.renderField} type="url" />
                        <Field name="facebook" label="Facebook: " component={this.renderField} type="url" />
                        <Field name="instagram" label="Instagram: " component={this.renderField} type="url" />
                        <Field name="languages" label="Languages: " component={this.renderField} type="select" />
                        <Field name="causes" label="Causes: " component={this.renderField} type="select" />
                        <Field name="city" label="City: " component={this.renderField} type="select" />
                        <Field name="country" label="Country: " component={this.renderField} type="select" />
                        <Button type="submit">Submit</Button>
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
