import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, component: Component, ...props }) => {
    return (
        <Route
            {...props}
            render={props =>
                isAuthenticated === true ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};

export default ProtectedRoute;
