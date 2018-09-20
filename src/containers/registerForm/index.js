import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, FormFeedback, Input, Button
} from "reactstrap";
import { reduxForm } from "redux-form";
import PhotographerForm from "./photographerform";

/**
 *
 */
class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderField = this.renderField.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    renderField({
        input, label, type, options, meta: { touched, error, warning }
    }) {
        return (
            <FormGroup>
                <label>{label}</label>
                {type === "select"
                    ? <Input {...input} type={type} invalid={touched && error}>
                        {options.map(i => <option>{i}</option>)}
                    </Input>
                    : <Input {...input} type={type} invalid={touched && error} value={type === "file" ? null : input.value}/>}
                {touched && (error && <FormFeedback>{error}</FormFeedback>)}
            </FormGroup>
        );
    }

    render() {
        return (
            <Modal isOpen={this.props.showForm} toggle={this.props.toggleForm}>
                <ModalBody>
                    <PhotographerForm handleSubmit={this.handleSubmit} renderField={this.renderField} />
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
    if (!values.biography) {
        errors.biography = "Required";
    }
    return errors;
};

export default reduxForm({
    form: "registerNewForm",
    validate
})(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
