import React, { Component } from "react";
import { Field, FieldArray } from "redux-form";
import {
    Dropdown, DropdownMenu, DropdownToggle, CustomInput
} from "reactstrap";


export default class CheckboxesFormArray extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.controlMarked = this.controlMarked.bind(this);
        this.state = {
            dropdownOpen: false,
            markedValues: [],
        };
    }

    componentDidMount() {
        this.setState({ markedValues: this.props.options.map(i => false) });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    controlMarked(event) {
        const tempVal = [...this.state.markedValues];
        const id = parseInt(event.target.id, 10);

        if (!tempVal[id]) { // value not yet checked
            tempVal[id] = true;
            console.log(tempVal);
            this.props.fields.push(this.props.options[id]);
            this.setState({
                markedValues: [...tempVal],
                nValuesSelected: this.state.nValuesSelected += 1
            });
        } else { // value already checked (i.e. item to remove)
            const itemToRemove = this.props.fields.getAll().findIndex((el) => el === this.props.options[id]);
            tempVal[id] = false;
            console.log(tempVal);
            console.log(`remove ${itemToRemove}`);
            this.props.fields.remove(itemToRemove);
            this.setState({
                markedValues: [...tempVal],
                nValuesSelected: this.state.nValuesSelected -= 1
            });
        }
    }

    render() {
        const { fields, options, meta: { error } } = this.props;

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle onClick={this.toggle} data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}caret>{fields.name}</DropdownToggle>
                <DropdownMenu>
                    {options.map((item, index) => <CustomInput onChange={this.controlMarked}
                        key={index} id={index} type="checkbox" checked={this.state.markedValues[index]} label={item}></CustomInput>)
                    }
                </DropdownMenu>
            </Dropdown>
        );
    }
}
