import React, { useState } from "react";
import { Spinner, Col, Form, FormGroup, Label, Input } from "reactstrap";

const FilterBox = ({ options, select, condition, handleChange }) => (
    <Form>
        <FormGroup row className="filter-row row justify-content-end">
            <Label for="exampleSelect" sm={1}>
                Filter by:
            </Label>
            <Col sm={2}>
                <Input
                    type="select"
                    value={select}
                    name="select"
                    onChange={handleChange}
                    id="exampleSelect"
                >
                    {options.map(o => (
                        <option>{o}</option>
                    ))}
                </Input>
            </Col>
            <Col sm={2}>
                <Input
                    type="text"
                    value={condition}
                    name="condition"
                    onChange={handleChange}
                    id="filter"
                    placeholder="Filter"
                />
            </Col>
        </FormGroup>
    </Form>
);

export default FilterBox;
