import React, { Component } from "react";
import { connect } from "react-redux";
import {
    FormGroup, FormFeedback, Input
} from "reactstrap";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import PhotographerForm from "./photographerform";
import OrganizationForm from "./organizationform";
import register from "../../actions/register";

import "./registerForm.scss";

/**
 *
 */
class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { userType: "photographer" };

        this.renderField = this.renderField.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { location: { hash } } = this.props;
        if (hash !== prevProps.location.hash) {
            this.setState({ userType: hash.slice(1, hash.length) });
            console.log(hash);
        }
    }

    renderField({
        input, label, type, options, meta: { touched, error, warning }
    }) {
        return (
            <FormGroup>
                <label>{label}</label>
                {type === "select"
                    ? <Input {...input} type={type} invalid={touched && error}>
                        {options.map((i, index) => <option key={index}>{i}</option>)}
                    </Input>
                    : <Input {...input} type={type} invalid={touched && error} value={type === "file" ? undefined : input.value}/>}
                {touched && (error && <FormFeedback>{error}</FormFeedback>)}
            </FormGroup>
        );
    }

    render() {
        const {
            doRegister, handleSubmit, location: { pathname }
        } = this.props;
        return (
            <div className="register-form d-flex flex-column flex-wrap align-items-center">
                <h3 className="portfolio-title">BE PART OF THE CHANGE</h3>
                <p>Joining Fairshots is free, easy and open to photographers and organizations anywhere around the world.
                 Start by clicking the button below that is most relevant to you. Easy Peasy.</p>
                <div className="register-tabs">
                    <div className="d-flex flex-wrap justify-content-around">
                        <Link to={{ pathname, hash: "#organization" }} className="f-tab-link">
                            <div>JOIN AS AN organization</div><img src="images/Dark_Green_Arrow_Up.png"
                                className={`tab-arrow ${this.state.userType === "photographer" ? "noshow" : ""}`}/></Link>
                        <Link to={{ pathname, hash: "#photographer" }} className="f-tab-link">
                            <div>JOIN AS AN photographer</div><img src="images/Dark_Green_Arrow_Up.png"
                                className={`tab-arrow ${this.state.userType === "photographer" ? "" : "noshow"}`}/></Link>
                    </div>
                    <div className="w-tab-content">
                        <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                            {this.state.userType === "photographer"
                                ? <PhotographerForm handleSubmit={handleSubmit(doRegister(this.state.userType))} renderField={this.renderField} />
                                : <OrganizationForm handleSubmit={handleSubmit(doRegister(this.state.userType))} renderField={this.renderField} />
                            }
                        </div>
                    </div>
                </div>
            </div>


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

const validate = userType => values => {
    const errors = {};

    if (!values.name) {
        errors.name = "Required";
    }
    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 8) {
        errors.password = "minimum 8 characters";
    }
    if (!values.city) {
        errors.city = "Required";
    }
    if (values.country === "" || !values.country) {
        errors.country = "Required";
    }

    if (userType === "photographer") {
        if (!values.biography) {
            errors.biography = "Required";
        }
        if (values.skill === "" || !values.skill) {
            errors.skill = "Required";
        }

        const picture = document.querySelector("input.form-control-file[name='pictUrl']");
        if (picture && picture.files[0]) {
            if (picture.files[0].size > 200000) {
                errors.pictUrl = "Max file size is 200kB";
            } else if (!/\.(jpe?g|png|gif|bmp)$/i.test(picture.files[0].name)) {
                errors.pictUrl = "Invalid file";
            }
        }
    } else if (userType === "organization") {
        if (!values.background) {
            errors.background = "Required";
        }

        const logo = document.querySelector("input.form-control-file[name='Logo']");
        if (logo && logo.files[0]) {
            if (logo.files[0].size > 200000) {
                errors.logo = "Max file size is 200kB";
            } else if (!/\.(jpe?g|png|gif|bmp)$/i.test(picture.files[0].name)) {
                errors.logo = "Invalid file";
            }
        }
    }
    return errors;
};

export default reduxForm({
    form: "registerNewForm",
    validate
})(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
