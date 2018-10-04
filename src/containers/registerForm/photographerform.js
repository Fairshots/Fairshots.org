
import React from "react";
import { Field, FieldArray } from "redux-form";
import { Form, Button } from "reactstrap";
import { countrylist, causes, languages } from "./select-options";
import checkboxesFormArray from "../../components/checkboxesFormArray";

export default function PhotographerForm({ handleSubmit, renderField }) {
    return (
        <Form className="container" onSubmit={handleSubmit}>
            <Field name="name" label="Name: " component={renderField} type="text" />
            <Field name="email" label="E-mail: " component={renderField} type="Email" />
            <Field name="password" label="Password: " component={renderField} type="Password" />
            <Field name="pictUrl" label="Picture: " component={renderField} type="file" />
            <Field name="skill" label="Skill Level: " component={renderField} options={["", "Student", "Amateur", "Professional"]} type="select" />
            <Field name="biography" label="Biography: " component={renderField} type="textarea" />
            <Field name="webpage" label="Webpage: " component={renderField} type="url" />
            <Field name="facebook" label="Facebook: " component={renderField} type="url" />
            <Field name="instagram" label="Instagram: " component={renderField} type="url" />
            <FieldArray className="languages" name="languages" label="Languages: " component={checkboxesFormArray} options={languages} />
            <FieldArray className="causes" name="causes" label="Causes: " component={checkboxesFormArray} options={causes}/>
            <Field name="city" label="City: " component={renderField} options={[]} type="text" />
            <Field name="country" label="Country: " component={renderField} type="select" options={countrylist}/>

            <Button type="submit">Submit</Button>
        </Form>
    );
}
