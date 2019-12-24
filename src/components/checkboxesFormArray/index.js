import React, { Component } from "react";
import { Dropdown, DropdownMenu, DropdownToggle, CustomInput } from "reactstrap";

import "./checkboxesFormArray.scss";

export default class CheckboxesFormArray extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.controlMarked = this.controlMarked.bind(this);
        this.state = {
            dropdownOpen: false,
            markedValues: this.props.options.map(i => false)
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    controlMarked(event) {
        event.stopPropagation();

        const tempVal = [...this.state.markedValues];
        const id = parseInt(event.target.id, 10);

        if (!tempVal[id]) {
            // value not yet checked
            tempVal[id] = true;
            this.props.fields.push(this.props.options[id]);
            this.setState({
                markedValues: [...tempVal]
            });
        } else {
            // value already checked (i.e. item to remove)
            const itemToRemove = this.props.fields
                .getAll()
                .findIndex(el => el === this.props.options[id]);
            tempVal[id] = false;
            this.props.fields.remove(itemToRemove);
            this.setState({
                markedValues: [...tempVal]
            });
        }
    }

    render() {
        const {
            fields,
            options,
            meta: { error }
        } = this.props;

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                    onClick={this.toggle}
                    className="cbformArray"
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                    caret
                >
                    {fields.name}
                </DropdownToggle>
                <DropdownMenu className="values-menu">
                    {options.map((item, index) => (
                        <CustomInput
                            onChange={this.controlMarked}
                            key={`${fields.name + index}`}
                            id={`${index + fields.name}`}
                            type="checkbox"
                            checked={this.state.markedValues[index]}
                            label={item}
                        />
                    ))}
                </DropdownMenu>
            </Dropdown>
        );
    }
}
