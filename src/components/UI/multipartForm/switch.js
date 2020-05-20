import React, { Component } from "react";

class Switch extends Component {
    state = {
        value: this.props.config.value
    };

    onChangeHandler = event => {
        event.persist();
        const value = event.target.id;
        this.setState({ value }, () => this.props.changeHandler(event));
    };

    render() {
        const { config } = this.props;
        return (
            <div className="form__group">
                <label>{config.label}</label>
                <div className="d-flex justify-content-around mt-2">
                    {config.options.map(option => (
                        <div className="custom-control custom-radio" key={option.displayedValue}>
                            <input
                                type="radio"
                                className="custom-control-input"
                                id={option.displayedValue}
                                name="groupOfDefaultRadios"
                                value={this.state.value}
                                defaultChecked={option.checked}
                                onChange={this.onChangeHandler}
                            />
                            <label
                                className="custom-control-label "
                                htmlFor={option.displayedValue}
                            >
                                {option.displayedValue}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Switch;
