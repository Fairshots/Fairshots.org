import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

import { Field, reduxForm } from "redux";

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
                    <input {...input} placeholder={label} type={type}/>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        );
    }

    render() {
        const {
            doLogin, isAuthenticated, handleLogout, errorMessage
        } = this.props;
        return (
            <Modal isOpen={this.props.showForm} toggle={this.props.toggleForm}>
                <ModalBody>


                </ModalBody>
            </Modal>
        );
    }
}
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

export default reduxForm({
    form: "registerNewForm"
})(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
