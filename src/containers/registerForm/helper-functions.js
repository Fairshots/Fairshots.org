import React from "react";
import { FormGroup, FormFeedback, Input } from "reactstrap";

const renderField = ({ input, label, type, options, meta: { touched, error, warning } }) => (
    <FormGroup>
        <label>{label}</label>
        {type === "select" ? (
            <Input {...input} type={type} invalid={touched && error}>
                {options.map((i, index) => (
                    <option key={index}>{i}</option>
                ))}
            </Input>
        ) : (
            <Input
                {...input}
                type={type}
                invalid={touched && error}
                value={type === "file" ? undefined : input.value}
            />
        )}
        {touched && (error && <FormFeedback>{error}</FormFeedback>)}
    </FormGroup>
);

const validate = values => {
    const errors = {};
    const userType = window.location.href.match("photographer") ? "photographer" : "organization";
    const formType = window.location.href.match("register") ? "register" : "update";

    if (!values.Name) {
        errors.Name = "Required";
    }
    if (!values.Email) {
        errors.Email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = "Invalid email address";
    }
    if (formType === "register") {
        if (!values.Password) {
            errors.Password = "Required";
        } else if (values.Password.length < 8) {
            errors.Password = "minimum 8 characters";
        }
    }
    if (!values.City) {
        errors.City = "Required";
    }
    if (values.Country === "" || !values.Country) {
        errors.Country = "Required";
    }

    if (userType === "photographer") {
        if (!values.Biography) {
            errors.Biography = "Required";
        }
        if (values.Skill === "" || !values.Skill) {
            errors.Skill = "Required";
        }

        const picture = document.querySelector("input.form-control-file[name='ProfilePic']");
        if (picture && picture.files[0]) {
            if (!/\.(jpe?g|png|gif|bmp)$/i.test(picture.files[0].name)) {
                errors.ProfilePic = "Invalid file";
            }
        }
    } else if (userType === "organization") {
        if (!values.Background) {
            errors.Background = "Required";
        }
        if (!values.ContactPerson) {
            errors.Person = "Required";
        }
        if (!values.website) {
            errors.website = "Required";
        }

        if (!values.Languages) {
            errors.Languages = "choose at least one";
        }

        const logo = document.querySelector("input.form-control-file[name='Logo']");
        if (logo && logo.files[0]) {
            if (!/\.(jpe?g|png|gif|bmp)$/i.test(logo.files[0].name)) {
                errors.Logo = "Invalid file";
            }
        }
    }
    return errors;
};

export { validate, renderField };
