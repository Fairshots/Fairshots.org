import React from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

import "./filterbox.scss";

const FilterBox = ({ options, select, condition, handleChange }) => (
    <Form>
        <FormGroup row className="filter-row row justify-content-end">
            <Col sm={2} className="d-inline-flex">
                <Label for="exampleSelect">Filter by:</Label>

                <Input
                    type="select"
                    value={select}
                    name="select"
                    onChange={handleChange}
                    id="filterSelect"
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
