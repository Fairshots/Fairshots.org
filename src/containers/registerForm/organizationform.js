import React from "react";
import { Field, FieldArray } from "redux-form";
import { Form, Button } from "reactstrap";
import { countrylist, causes, languages } from "../../helpers/form-data-options";
import checkboxesFormArray from "../../components/checkboxesFormArray";

export default function OrganizationForm({ handleSubmit, renderField }) {
    return (
        <Form className="container" onSubmit={handleSubmit}>
            <Field name="Name" label="Organization Name: " component={renderField} type="text" />
            <Field
                name="_parent"
                label="Parent Org (if any): "
                component={renderField}
                type="text"
            />
            <Field
                name="FundingPartner"
                label="Are you a Funding Partner ?: "
                component={renderField}
                type="select"
                options={["Yes", "No"]}
            />
            <Field name="Email" label="E-mail: " component={renderField} type="Email" />
            <Field name="Password" label="Password: " component={renderField} type="Password" />
            <Field name="Phone" label="Phone: " component={renderField} type="Telephone" />
            <Field name="Logo" label="Logo: " component={renderField} type="file" />
            <Field
                name="ContactPerson"
                label="Contact Person: "
                component={renderField}
                type="text"
            />
            <Field name="Position" label="Position: " component={renderField} type="text" />
            <Field name="Background" label="Background: " component={renderField} type="textarea" />
            <Field name="website" label="Website: " component={renderField} type="url" />
            <Field name="facebook" label="Facebook: " component={renderField} type="url" />
            <FieldArray
                className="Languages"
                name="Languages"
                label="Languages: "
                component={checkboxesFormArray}
                options={languages}
            />
            <FieldArray
                className="Causes"
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

            <Field
                name="agreement"
                label={
                    <p>
                        I agree with{" "}
                        <a id="term-agree" href="#">
                            terms and conditions:
                        </a>
                    </p>
                }
                component={renderField}
                type="checkbox"
            />

            <Button color="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}
