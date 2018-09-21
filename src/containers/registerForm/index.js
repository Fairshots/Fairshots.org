import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, FormFeedback, Input, Button
} from "reactstrap";
import { reduxForm } from "redux-form";
import PhotographerForm from "./photographerform";

import register from "../../actions/register";

/**
 *
 */
class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { userType: "photographer" };

        this.renderField = this.renderField.bind(this);
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
                    : <Input {...input} type={type} invalid={touched && error} value={type === "file" ? undefined : input.value}/>}
                {touched && (error && <FormFeedback>{error}</FormFeedback>)}
            </FormGroup>
        );
    }

    render() {
        const {
            showForm, toggleForm, doRegister, handleSubmit
        } = this.props;
        return (
            <Modal isOpen={showForm} toggle={toggleForm}>
                <ModalBody>
                    <PhotographerForm handleSubmit={handleSubmit(doRegister(this.state.userType))} renderField={this.renderField} />
                </ModalBody>
            </Modal>
        );
    }
}
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
    doRegister: userType => formFilled => {
        console.log(formFilled);
        dispatch(register(userType, formFilled));
    }
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
    const pictUrl = document.querySelector("input.form-control-file[name='pictUrl']");

    if (pictUrl && pictUrl.files[0]) {
        if (pictUrl.files[0].size > 200000) {
            errors.pictUrl = "Max file size is 200kB";
        } else if (!/\.(jpe?g|png|gif|bmp)$/i.test(pictUrl.files[0].name)) {
            errors.pictUrl = "Invalid file";
        }
    }

    return errors;
};

export default reduxForm({
    form: "registerNewForm",
    validate
})(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
