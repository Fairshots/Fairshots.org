import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
    isAuthenticated,
    userType,
    allowOnly,
    component: Component,
    ...props
}) => {
    return (
        <Route
            {...props}
            render={props =>
                isAuthenticated === true && userType === allowOnly ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default ProtectedRoute;
