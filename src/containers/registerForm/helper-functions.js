import React from "react";
import {
    FormGroup, FormFeedback, Input
} from "reactstrap";

const renderField = ({
    input, label, type, options, meta: { touched, error, warning }
}) => (
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

const validate = values => {
    const errors = {};
    const userType = window.location.href.split("#")[1];

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
        if (!values.person) {
            errors.person = "Required";
        }
        if (!values.website) {
            errors.website = "Required";
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

export { validate, renderField };
