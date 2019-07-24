import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import Auth0 from "../loginHandler/auth0-webauth";
import PhotographerForm from "./photographerform";
import OrganizationForm from "./organizationform";
import { register, checkForm, resetMessages } from "../../actions/register";
import { renderField, validate } from "./helper-functions";
import ReusableModal from "../../components/UI/reusableModal";
import TermsandConditions from "../../components/terms-and-conditions";
import "./registerForm.scss";

/**
 *
 */
class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: window.location.href.split("#")[1] || "photographer",
            modalShow: false
        };
    }

    componentDidUpdate(prevProps) {
        const {
            location: { hash },
            submitFailed,
            doCheckForm,
            history,
            regmsg
        } = this.props;
        if (hash !== prevProps.location.hash) {
            // change userType according to url hash
            this.setState({ userType: hash.slice(1, hash.length) });
        }
        if (typeof regmsg.message === "string" && typeof prevProps.regmsg.message === "undefined") {
            setTimeout(this.props.doResetMessages, 3000); // show error message for 3 seconds if reg. problem
        }
        if (submitFailed && !prevProps.submitFailed) {
            doCheckForm(); // show error message for 3 seconds if required fields are not filled
        }
        if (
            regmsg.success &&
            typeof regmsg.message === "string" &&
            typeof prevProps.regmsg.message === "undefined"
        ) {
            // show registration success and push to home page
            window.alert(regmsg.message);
            setTimeout(this.props.doResetMessages, 3000);
            setTimeout(history.push("/"), 3001);
        }
    }

    render() {
        const {
            doRegister,
            handleSubmit,
            regmsg,
            valid,
            location: { pathname }
        } = this.props;
        return (
            <div className="register-form d-flex flex-column flex-wrap align-items-center">
                <h3 className="portfolio-title">BE PART OF THE CHANGE</h3>
                <p>
                    Joining Fairshots is free, easy and open to photographers and organizations
                    anywhere around the world. Start by clicking the button below that is most
                    relevant to you. Easy Peasy.
                </p>
                <div className="register-tabs">
                    <div className="d-flex flex-wrap justify-content-around">
                        <Link
                            to={{ pathname, hash: "#organization" }}
                            className="f-tab-link"
                            onClick={() => {
                                this.props.initialize();
                            }}
                        >
                            <div>JOIN AS AN organization</div>
                            <img
                                src="images/Dark_Green_Arrow_Up.png"
                                className={`tab-arrow ${
                                    this.state.userType === "photographer" ? "noshow" : ""
                                }`}
                            />
                        </Link>
                        <Link
                            to={{ pathname, hash: "#photographer" }}
                            className="f-tab-link"
                            onClick={() => {
                                this.props.initialize();
                            }}
                        >
                            <div>JOIN AS AN photographer</div>
                            <img
                                src="images/Dark_Green_Arrow_Up.png"
                                className={`tab-arrow ${
                                    this.state.userType === "photographer" ? "" : "noshow"
                                }`}
                            />
                        </Link>
                    </div>
                    <div className="row mt-5 justify-content-center">
                        <FacebookLoginButton
                            style={{ "font-size": "16px", width: "50%" }}
                            iconSize="16px"
                            size="40px"
                            onClick={() =>
                                Auth0.authorize({
                                    connection: "facebook"
                                })
                            }
                        >
                            <span>Sign up with Facebook</span>
                        </FacebookLoginButton>
                        <GoogleLoginButton
                            style={{ "font-size": "16px", width: "50%" }}
                            iconSize="16px"
                            size="40px"
                            onClick={() =>
                                Auth0.authorize({
                                    connection: "google-oauth2"
                                })
                            }
                        >
                            <span>Sign up with Google</span>
                        </GoogleLoginButton>
                    </div>
                    <div className="w-tab-content">
                        {this.state.userType === "photographer" ? (
                            <PhotographerForm
                                handleSubmit={handleSubmit(doRegister(this.state.userType))}
                                renderField={renderField}
                                modalShow={() =>
                                    this.setState({ modalShow: !this.state.modalShow })
                                }
                            />
                        ) : (
                            <OrganizationForm
                                handleSubmit={handleSubmit(doRegister(this.state.userType))}
                                renderField={renderField}
                                modalShow={() =>
                                    this.setState({ modalShow: !this.state.modalShow })
                                }
                            />
                        )}
                        {regmsg.message && (
                            <span
                                className={`${
                                    regmsg.success ? "text-success" : "text-danger"
                                } ml-5 mt-5`}
                            >
                                {regmsg.message}
                            </span>
                        )}
                    </div>
                </div>
                <ReusableModal
                    Component={TermsandConditions}
                    size="lg"
                    show={this.state.modalShow}
                    setShow={() => this.setState({ modalShow: !this.state.modalShow })}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    regmsg: state.registration,
    initialValues: state.auth.prefilled_signup
});
const mapDispatchToProps = dispatch => ({
    doRegister: userType => formFilled => {
        console.log(formFilled);
        dispatch(register(userType, formFilled));
    },
    doCheckForm: () => dispatch(checkForm()),
    doResetMessages: () => dispatch(resetMessages())
});

const registerform = reduxForm({
    form: "registerNewForm",
    validate,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(RegisterForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(registerform);
