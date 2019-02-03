import React, { Component } from "react";
import "./form.scss";
import InputType from "./inputType";
import { Link } from "react-router-dom";
import { MDBBtn, MDBRow, MDBIcon } from "mdbreact";

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
        const { children, steps, data, changeHandler, onBlur, dataSend } = this.props;
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
                {dataSend ? (
                    <div className="form d-flex justify-content-center">
                        <h4>Thank you, Your application has been successfully sent!</h4>
                        <MDBIcon icon="paper-plane" className="m-5" />
                        <p>You should wait till your request gets approved by admin.</p>{" "}
                        <p>In the meantime check out our photographer's portfolios.</p>
                        <Link to="/photographers">
                            <MDBBtn>
                                FIND A PHOTOGRAPHER
                                <MDBIcon far className="ml-2" icon="images" />
                            </MDBBtn>
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

                            {!fieldsetValidity && (
                                <>
                                    <p className="form__warning text-center pt-4">
                                        <span>Please carefully fill out all required fields</span>{" "}
                                        ⚠️
                                    </p>
                                </>
                            )}

                            <MDBRow end>
                                {activeTab !== 1 && (
                                    <MDBBtn id="previousBtn" onClick={this.previousStepHandler}>
                                        Previous step
                                    </MDBBtn>
                                )}
                                <MDBBtn id="nextBtn" onClick={this.nextStepHandler}>
                                    {activeTab === 6 ? `Submit` : `Next step`}
                                </MDBBtn>
                            </MDBRow>
                        </fieldset>
                    </form>
                )}
            </>
        );
    }
}

export default MultipartForm;
