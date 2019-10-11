import React, { useState, useEffect } from "react";
import { Field, FieldArray } from "redux-form";
import { Form, Button } from "reactstrap";
import { countrylist, causes, languages } from "../../helpers/form-data-options";
import checkboxesFormArray from "../../components/checkboxesFormArray";

export default function OrganizationForm({ handleSubmit, renderField, modalShow, logo }) {
    const [picUrl, setPicUrl] = useState("");

    useEffect(
        () => {
            if (typeof profilePic === "string") setPicUrl(logo);
        },
        [logo]
    );
    return (
        <div>
            <Form className="container" onSubmit={handleSubmit}>
                <Field
                    name="Name"
                    label="Organization Name: "
                    component={renderField}
                    type="text"
                />
                <Field name="Email" label="E-mail: " component={renderField} type="Email" />
                <Field name="Password" label="Password: " component={renderField} type="Password" />
                <Field
                    name="ConfirmPassword"
                    label="Confirm Password: "
                    component={renderField}
                    type="Password"
                />
                <Field name="Phone" label="Phone: " component={renderField} type="Telephone" />
                <Field name="Logo" label="Logo: " component={renderField} type="file" />
                {picUrl !== "" && <img src={picUrl} height="128" width="128" />}
                <Field
                    name="ContactPerson"
                    label="Contact Person: "
                    component={renderField}
                    type="text"
                />
                <Field name="Position" label="Position: " component={renderField} type="text" />
                <Field
                    name="Background"
                    label="About this organization: "
                    component={renderField}
                    type="textarea"
                />
                <Field name="website" label="Website: " component={renderField} type="url" />
                <Field name="facebook" label="Facebook: " component={renderField} type="url" />
                <FieldArray
                    className="Languages"
                    name="Languages"
                    label="Languages: "
                    component={checkboxesFormArray}
                    options={languages}
                />
                <Field
                    className="Causes"
                    name="PrimaryCause"
                    label="Primary Cause: "
                    type="select"
                    component={renderField}
                    options={causes}
                />
                <Field
                    name="City"
                    label="City: "
                    component={renderField}
                    options={[]}
                    type="text"
                />
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
        </div>
    );
}
