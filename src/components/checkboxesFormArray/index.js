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

    componentDidMount() {
        const { name, form, options } = this.props;
        const tempVal = [...this.state.markedValues];

        if (form.values[name].length > 0) {
            let index;
            form.values[name].forEach(val => {
                index = options.findIndex(el => el === val);
                tempVal[index] = true;
            });
            this.setState({
                markedValues: [...tempVal]
            });
        }
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    controlMarked(event) {
        const { push, remove, form, options, name } = this.props;
        event.stopPropagation();

        const tempVal = [...this.state.markedValues];
        const id = parseInt(event.target.id, 10);

        if (!tempVal[id]) {
            // value not yet checked
            tempVal[id] = true;
            push(options[id]);
            this.setState({
                markedValues: [...tempVal]
            });
        } else {
            // value already checked (i.e. item to remove)
            const itemToRemove = form.values[name].findIndex(el => el === options[id]);
            tempVal[id] = false;
            remove(itemToRemove);
            this.setState({
                markedValues: [...tempVal]
            });
        }
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                    onClick={this.toggle}
                    className="cbformArray"
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                    caret
                >
                    {this.props.name}
                </DropdownToggle>
                <DropdownMenu className="values-menu">
                    {this.props.options.map((item, index) => (
                        <CustomInput
                            onChange={this.controlMarked}
                            key={`${this.props.name + index}`}
                            id={`${index + this.props.name}`}
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
