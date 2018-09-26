
import React from "react";
import { Field } from "redux-form";
import { Form, Button } from "reactstrap";
import { countrylist, causes } from "./select-options";

export default function OrganizationForm({ handleSubmit, renderField }) {
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="name" label="Name: " component={renderField} type="text" />
            <Field name="email" label="E-mail: " component={renderField} type="Email" />
            <Field name="password" label="Password: " component={renderField} type="Password" />
            <Field name="logo" label="Logo: " component={renderField} type="file" />
            <Field name="skill" label="Skill Level: " component={renderField} options={["Student", "Amateur", "Professional"]} type="select" />
            <Field name="biography" label="Biography: " component={renderField} type="textarea" />
            <Field name="webpage" label="Webpage: " component={renderField} type="url" />
            <Field name="facebook" label="Facebook: " component={renderField} type="url" />
            <Field name="instagram" label="Instagram: " component={renderField} type="url" />
            <Field name="languages" label="Languages: " component={renderField} options={[]} type="select" />
            <Field name="causes" label="Causes: " component={renderField} options={causes} type="select" />
            <Field name="city" label="City: " component={renderField} options={[]} type="text" />
            <Field name="country" label="Country: " component={renderField} type="select" options={countrylist}/>

            <Button type="submit">Submit</Button>
        </Form>
    );
}
