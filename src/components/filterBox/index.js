import React from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

import "./filterbox.scss";

const FilterBox = ({
    options,
    type,
    language,
    cause,
    select,
    skillType,
    currentCause,
    currentLanguage,
    condition,
    handleChange
}) => (
    <Form>
        {/* justify-content-end changed to justify-content-center */}
        <FormGroup row className="filter-row row justify-content-center">
            {type ? (
                <Col sm={2} className="d-inline-flex">
                    <Input
                        type="select"
                        value={skillType}
                        name="select"
                        onChange={handleChange}
                        id="selectType"
                    >
                        {type.map(o => (
                            <option>{o}</option>
                        ))}
                    </Input>
                </Col>
            ) : (
                <Col style={{ display: "none" }} />
            )}
            {/* Active when database is available for the following: */}
            <Col sm={2} className="d-inline-flex">
                <Input
                    type="select"
                    value={currentCause}
                    name="select"
                    onChange={handleChange}
                    id="selectCause"
                >
                    {cause.map(o => (
                        <option>{o}</option>
                    ))}
                </Input>
            </Col>
            <Col sm={2} className="d-inline-flex">
                <Input
                    type="select"
                    value={currentLanguage}
                    name="select"
                    onChange={handleChange}
                    id="selectLanguage"
                >
                    {language.map(o => (
                        <option>{o}</option>
                    ))}
                </Input>
            </Col>
            <Col sm={2} className="d-inline-flex">
                {/* <Label for="exampleSelect">Filter by:</Label> */}

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
