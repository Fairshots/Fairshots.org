import React, { Component } from "react";
import "./form.scss";
import { Link } from "react-router-dom";
import { Button, Row } from "reactstrap";
import { FaImages, FaPaperPlane } from "react-icons/fa";
import InputType from "./inputType";

class MultipartForm extends Component {
    state = {
        activeTab: 1,
        fieldsetValidity: true
    };

    nextStepHandler = e => {
        if (this.state.activeTab === 6) {
            this.props.onSubmit(e);
            return;
        }

        const activeFieldset = this.props.data.filter(
            dataset => dataset.config.tabId === this.state.activeTab
        );

        let isValid = true;

        activeFieldset.map(field => {
            if (field.config.config.validationRules.required && !field.config.config.valid) {
                isValid = false;
            }
        });

        if (isValid) {
            this.setState({ activeTab: this.state.activeTab + 1, fieldsetValidity: true });
        } else {
            this.setState({ fieldsetValidity: false });
        }
    };

    previousStepHandler = () => {
        this.setState({ activeTab: this.state.activeTab - 1, fieldsetValidity: true });
    };

    render() {
        const { children, steps, data, changeHandler, onBlur, dataSend, errorMessage } = this.props;
        const { activeTab, fieldsetValidity } = this.state;

        return (
            <>
                <ul className="progressbar">
                    {steps.map((step, index) => (
                        <li
                            id={index}
                            className={activeTab === index + 1 || index < activeTab ? "active" : ""}
                            key={step.title}
                        >
                            {step.title}
                        </li>
                    ))}
                </ul>
                {dataSend && !errorMessage ? (
                    <div className="form d-flex justify-content-center">
                        <h4>Thank you, Your project has been successfully created!</h4>
                        <FaPaperPlane />
                        <p>You can start checking out our photographers portfolios.</p>
                        <Link to="/photographers">
                            <Button>
                                FIND A PHOTOGRAPHER
                                <FaImages />
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <form className="form" action="#">
                        <h2 className="form__title">{children}</h2>
                        <p className="form__subtitle">{steps[activeTab - 1].description}</p>
                        <fieldset>
                            {data.map(element => {
                                if (element.config.tabId === activeTab) {
                                    return (
                                        <InputType
                                            key={element.id}
                                            name={element.id}
                                            config={{ ...element.config.config }}
                                            tabId={element.config.tabId}
                                            elementType={element.config.elementType}
                                            changeHandler={changeHandler(element.id)}
                                            onBlur={onBlur(element.id)}
                                        />
                                    );
                                }
                            })}

                            {(!fieldsetValidity || errorMessage) && (
                                <>
                                    <p className="form__warning text-center pt-4">
                                        <span>
                                            {errorMessage ||
                                                "Please carefully fill out all required fields"}
                                        </span>
                                        ⚠️
                                    </p>
                                </>
                            )}

                            <Row end>
                                {activeTab !== 1 && (
                                    <Button id="previousBtn" onClick={this.previousStepHandler}>
                                        Previous step
                                    </Button>
                                )}
                                <Button id="nextBtn" onClick={this.nextStepHandler}>
                                    {activeTab === 6 ? "Submit" : "Next step"}
                                </Button>
                            </Row>
                        </fieldset>
                    </form>
                )}
            </>
        );
    }
}

export default MultipartForm;
