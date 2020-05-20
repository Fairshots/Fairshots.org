import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FaExclamationTriangle } from "react-icons/fa";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import "./notifications.scss";

const Notifications = ({ notifications, resetNotif }) => {
    useEffect(
        () => {
            if (notifications.isThere) setTimeout(() => resetNotif(), 7000);
        },
        [notifications.isThere]
    );

    return (
        <div>
            <Toast
                style={{
                    "background-color": notifications.type === "Error" ? "#dc354554" : "#28a745c2"
                }}
                isOpen={notifications.isThere}
            >
                <ToastHeader toggle={() => resetNotif()}>
                    <FaExclamationTriangle />
                    {` ${notifications.type}`}
                </ToastHeader>
                <ToastBody>{notifications.message}</ToastBody>
            </Toast>
        </div>
    );
};

const mapStateToProps = reduxState => ({
    notifications: reduxState.notifications
});

const mapDispatchToProps = dispatch => ({
    resetNotif: () => {
        dispatch({
            type: "RESET_NOTIFS"
        });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifications);
