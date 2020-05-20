import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./home";
import About from "./about";
import ContactPage from "../containers/contactPage";
import TermsandConditions from "./terms-and-conditions";
import RegisterForm from "../containers/registerForm";
import UserProfile from "../containers/userProfile";
import AccSettings from "../containers/accSettings";
import AllOrgs from "../containers/allOrgs";
import AllPhotographers from "../containers/allPhotographers";
import AllProjects from "../containers/allProjects";
import ProjectForm from "../containers/projectForm";
import ProjectPage from "../containers/projectPage";
import PasswordReset from "../containers/passwordReset";
import SocialLogin from "../containers/loginHandler/socialLogin";
import ConfirmEmail from "../containers/confirmEmail";

export default function Main(props) {
    const { pathname } = useLocation();

    useEffect(
        () => {
            window.scrollTo(0, 0);
        },
        [pathname]
    );

    return (
        <main>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact-us" exact component={ContactPage} />
                <Route
                    path="/stories"
                    exact
                    component={() => (
                        <iframe
                            width="100%"
                            height={window.innerHeight}
                            frameBorder="0"
                            src="https://stories.fairshots.org"
                            style={{ top: "-60px", position: "relative" }}
                        />
                    )}
                />
                <Route path="/register" exact component={RegisterForm} />
                <Route path="/photographers" exact component={AllPhotographers} />
                <Route path="/organizations" exact component={AllOrgs} />
                <Route path="/projects" exact component={AllProjects} />
                <Route path="/terms-and-conditions" exact component={TermsandConditions} />

                <Route
                    path="/create-a-project"
                    render={() =>
                        props.isAuthenticated === true && props.userType === "organization" ? (
                            <ProjectForm newProject />
                        ) : (
                            <Redirect to="/" />
                        )
                    }
                />
                <Route path="/login/callback" exact render={() => <SocialLogin {...props} />} />
                <Route path="/login/pwreset/:token" exact component={PasswordReset} />
                <Route path="/project/:projId" exact component={ProjectPage} />
                <Route path="/:userType/:userId" exact component={UserProfile} />
                <Route path="/:userType/:userId/settings" exact component={AccSettings} />
                <Route path="/:userType/emailconfirm/:token" exact component={ConfirmEmail} />
            </Switch>
        </main>
    );
}
