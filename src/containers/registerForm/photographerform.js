import React from "react";
import { Field, FieldArray } from "redux-form";
import { Form, Button } from "reactstrap";
import { countrylist, causes, languages } from "../../helpers/form-data-options";
import checkboxesFormArray from "../../components/checkboxesFormArray";

export default function PhotographerForm({ handleSubmit, renderField, modalShow }) {
    return (
        <Form className="container" onSubmit={handleSubmit}>
            <Field name="Name" label="Name: " component={renderField} type="text" />
            <Field name="Email" label="E-mail: " component={renderField} type="Email" />
            <Field name="Password" label="Password: " component={renderField} type="Password" />
            <Field name="ProfilePic" label="Picture: " component={renderField} type="file" />
            <Field
                name="Skill"
                label="Skill Level: "
                component={renderField}
                options={["", "Student", "Amateur", "Professional"]}
                type="select"
            />
            <Field name="Biography" label="Biography: " component={renderField} type="textarea" />
            <Field name="Phone" label="Phone: " component={renderField} type="Telephone" />
            <Field name="webpage" label="Webpage: " component={renderField} type="url" />
            <Field name="facebook" label="Facebook: " component={renderField} type="url" />
            <Field name="instagram" label="Instagram: " component={renderField} type="url" />
            <FieldArray
                className="languages"
                name="Languages"
                label="Languages: "
                component={checkboxesFormArray}
                options={languages}
            />
            <FieldArray
                className="causes"
                name="Causes"
                label="Causes: "
                component={checkboxesFormArray}
                options={causes}
            />
            <Field name="City" label="City: " component={renderField} options={[]} type="text" />
            <Field
                name="Country"
                label="Country: "
                component={renderField}
                type="select"
                options={countrylist}
            />
            {modalShow !== "update" && (
                <Field
                    name="agreement"
                    label={
                        <p>
                            I agree with{" "}
                            <a
                                id="term-agree"
                                href="#"
                                onClick={e => {
                                    e.preventDefault();
                                    modalShow();
                                }}
                            >
                                terms and conditions:
                            </a>
                        </p>
                    }
                    component={renderField}
                    type="checkbox"
                />
            )}

            <Button color="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}
