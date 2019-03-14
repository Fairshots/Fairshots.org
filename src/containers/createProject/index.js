import React, { Component } from "react";
import formConfiguration from "./formConfiguration.json";
import { MultipartForm, DonutSpin } from "../../components/UI";

class createProject extends Component {
    state = {
        loading: false,
        activeStep: 0,
        dataSend: false,
        steps: [
            {
                title: "Project details"
            },
            {
                title: "References",
                description:
                    "Upload up to 5 reference images. A visual reference can help you describe what type of images you are after. These can be images of previous jobs you have done or something you might have seen online, not necessarily only photographs, but styles and brands can help enforce what you are trying to convey. You can upload as many as 5 visual references. Max individual files size 1mb."
            },
            {
                title: "Location",
                description: "Where is this happening?"
            },
            {
                title: "Dates",
                description: "When is this happening?"
            },
            {
                title: "Funds and incentives"
            },
            {
                title: "Applicants"
            }
        ],
        form: formConfiguration.form
    };

    formSubmitHanlder = e => {
        e.preventDefault();

        const formData = {};

        for (const inputIdentifier in this.state.form) {
            formData[inputIdentifier] = this.state.form[inputIdentifier].config.value;
        }

        this.postData(formData);
        this.setState({ loading: true });
    };

    postData = formData => {
        // TODO: send data to the backend
        console.log(formData);
        new Promise(resolve => {
            setTimeout(resolve, 3000);
        }).then(() => this.setState({ loading: false, dataSend: true }));
    };

    checkValidity = (value, rules) => {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== "";
        } else {
            isValid = true;
        }

        return isValid;
    };

    onBlur = inputIdentifier => e => {
        const { validationRules } = this.state.form[inputIdentifier].config;
        const { value } = e.target;

        const form = {
            ...this.state.form,
            [inputIdentifier]: {
                ...this.state.form[inputIdentifier],
                config: {
                    ...this.state.form[inputIdentifier].config,
                    valid: this.checkValidity(value, validationRules),
                    touched: true
                }
            }
        };

        this.setState({ form });
    };

    inputChangeHandler = inputIdentifier => e => {
        const { value } = e.target;

        const form = {
            ...this.state.form,
            [inputIdentifier]: {
                ...this.state.form[inputIdentifier],
                config: {
                    ...this.state.form[inputIdentifier].config,
                    value
                }
            }
        };

        this.setState({ form });
    };

    render() {
        const formElementsArray = [];
        for (const key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }

        const { activeStep, steps, loading, dataSend } = this.state;

        return (
            <div className="d-flex flex-column flex-wrap align-items-center">
                {loading && <DonutSpin spinshow={loading} />}
                <MultipartForm
                    onSubmit={this.formSubmitHanlder}
                    activeStep={activeStep}
                    steps={steps}
                    data={formElementsArray}
                    changeHandler={this.inputChangeHandler}
                    onBlur={this.onBlur}
                    dataSend={dataSend}
                >
                    Create a new project
                </MultipartForm>
            </div>
        );
    }
}

export default createProject;
