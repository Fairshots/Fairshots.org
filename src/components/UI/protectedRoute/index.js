import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
    isAuthenticated,
    userType,
    allowOnly,
    newOne,
    component: Component,
    ...props
}) => (
    <Route
        {...props}
        render={() =>
            isAuthenticated === true && userType === allowOnly ? (
                <Component {...props} newOne />
            ) : (
                <Redirect to="/" />
            )
        }
    />
);

export default ProtectedRoute;
