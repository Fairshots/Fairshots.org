import React, { Component } from "react";
import { Field, FieldArray } from "redux-form";
import {
    Dropdown, DropdownMenu, DropdownToggle, CustomInput
} from "reactstrap";


export default class ManyCheckboxes extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const { fields, options, meta: { error } } = this.props;

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle onClick={this.toggle} data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}caret>{fields.name}</DropdownToggle>
                <DropdownMenu>
                    {options.map((item, index) => <CustomInput onClick={() => fields.push(item)}
                        key={index} id={item} type="checkbox" label={item}></CustomInput>)}
                </DropdownMenu>
            </Dropdown>
        );
    }
}
