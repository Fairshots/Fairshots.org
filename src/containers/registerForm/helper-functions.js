import React from "react";
import { FormGroup, FormFeedback, Input } from "reactstrap";

const OrgInitialValues = {
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Logo: "",
    ContactPerson: "",
    Position: "",
    Background: "",
    Phone: "",
    website: "",
    facebook: "",
    Languages: [],
    PrimaryCause: "",
    City: "",
    Country: "",
    agreement: false
};

const PhotographerInitialValues = {
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    ProfilePic: "",
    Skill: "",
    Biography: "",
    Phone: "",
    webpage: "",
    facebook: "",
    instagram: "",
    Languages: [],
    Causes: [],
    City: "",
    Country: "",
    agreement: false
};

const renderField = ({ field, label, type, options, form, form: { touched, errors } }) => (
    <FormGroup>
        <label>{label}</label>
        {type === "select" ? (
            <Input {...field} type="select" invalid={touched[field.name] && errors[field.name]}>
                {options.map((i, index) => (
                    <option key={index}>{i}</option>
                ))}
            </Input>
        ) : (
            <Input
                {...field}
                type={type}
                invalid={touched[field.name] && errors[field.name]}
                value={type === "file" ? undefined : field.value}
                onChange={
                    type === "file"
                        ? event => form.setFieldValue(field.name, event.currentTarget.files[0])
                        : field.onChange
                }
            />
        )}
        {touched[field.name] &&
            (errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback>)}
    </FormGroup>
);

const validate = (values, props) => {
    const errors = {};
    const userType = window.location.href.match("photographer") ? "photographer" : "organization";
    const formType = window.location.href.match("register") ? "register" : "update";
    console.log(props);
    if (!values.Name) {
        errors.Name = "Required";
    }
    if (!values.Email) {
        errors.Email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = "Invalid email address";
    }

    if (values.Password !== values.ConfirmPassword) {
        if (!props.initialValues) {
            errors.Password = "Passwords don't match";
        } else if (values.Password !== props.initialValues.Password) {
            errors.Password = "Passwords don't match";
        }
    }

    if (formType === "register") {
        if (!values.Password) {
            errors.Password = "Required";
        } else if (values.Password.length < 8) {
            errors.Password = "minimum 8 characters";
        }
        if (!values.agreement) {
            errors.agreement = "You need to click the box above";
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

export { OrgInitialValues, PhotographerInitialValues, validate, renderField };
