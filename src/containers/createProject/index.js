import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import formConfiguration from "./formConfiguration";
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

    formSubmitHandler = e => {
        e.preventDefault();
        const { form } = this.state;

        const formData = Object.keys(form)
            .map(i => ({ [i]: form[i].config.value }))
            .reduce((acc, cur) => ({ ...acc, ...cur }));

        // for (const inputIdentifier in form) {
        //    formData[inputIdentifier] = form[inputIdentifier].config.value;
        // }

        this.props.postProjectData(formData);
        this.setState({ loading: true });
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
        const { activeStep, steps, loading, dataSend, form } = this.state;
        const formElementsArray = Object.keys(form).map(key => ({
            id: key,
            config: form[key]
        }));

        return (
            <div className="d-flex flex-column flex-wrap align-items-center">
                {loading && <DonutSpin spinshow={loading} />}
                <MultipartForm
                    onSubmit={this.formSubmitHandler}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    postProjectData: formProps => {
        dispatch(postProject(formProps));
    }
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(createProject)
);
