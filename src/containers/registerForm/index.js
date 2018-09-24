import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Form, FormGroup, FormFeedback, Input, Button
} from "reactstrap";
import { reduxForm } from "redux-form";
import PhotographerForm from "./photographerform";

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
            doRegister, handleSubmit
        } = this.props;
        return (
            <div className="register-form d-flex flex-column flex-wrap align-items-center">
                <h3 className="portfolio-title">BE PART OF THE CHANGE</h3>
                <p>Joining Fairshots is free, easy and open to photographers and organizations anywhere around the world. Start by clicking the button below that is most relevant to you. Easy Peasy.</p>
                <div className="register-tabs">
                    <div className="d-flex flex-wrap justify-content-spacearound">
                        <a data-w-tab="Tab 1" className="tab-link register w-inline-block w-tab-link">
                            <div>JOIN AS AN organization</div><img src="images/Dark_Green_Arrow_Up.png" data-ix="tab-arrow" className="tab-arrow"/></a>
                        <a data-w-tab="Tab 2" className="tab-link register w-inline-block w-tab-link w--current">
                            <div>JOIN AS a photographer</div><img src="images/Dark_Green_Arrow_Up.png" data-ix="tab-arrow" className="tab-arrow"/></a>
                    </div>
                    <div className="w-tab-content">
                        <div data-w-tab="Tab 1" className="w-tab-pane">
                            <PhotographerForm handleSubmit={handleSubmit(doRegister(this.state.userType))} renderField={this.renderField} />
                        </div>
                        <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                            <PhotographerForm handleSubmit={handleSubmit(doRegister(this.state.userType))} renderField={this.renderField} />
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
