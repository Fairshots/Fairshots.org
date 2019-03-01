import { FAIRSHOTS_API } from "./constants";
import toggleLoading from "./toggleLoading";

export function login(formProps) {
    return async dispatch => {
        dispatch(toggleLoading());
        const config = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: formProps.email,
                password: formProps.password
            })
        };
        try {
            const res = await fetch(`${FAIRSHOTS_API}login`, config);
            const usertoSave = await res.json();
            console.log(usertoSave);
            localStorage.setItem("user", JSON.stringify(usertoSave));
            dispatch({
                type: "AUTH_SUCCESS",
                payload: usertoSave
            });
            dispatch(toggleLoading());
        } catch (e) {
            dispatch({
                type: "AUTH_ERROR",
                payload: "email or password incorrect or doesn`t exist"
            });
            dispatch(toggleLoading());
        }
    };
}

export function logout() {
    return {
        type: "AUTH_LOGOUT"
    };
}

export function forgotPw(formProps) {
    return async dispatch => {
        dispatch(toggleLoading());
        const config = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Email: formProps.email })
        };
        try {
            const res = await fetch(`${FAIRSHOTS_API}login/forgot`, config);
            const info = await res.json();
            console.log(info);
            dispatch({
                type: "AUTH_FORGOT",
                payload: info
            });
            dispatch(toggleLoading());
        } catch (e) {
            dispatch({
                type: "AUTH_ERROR",
                payload: e.statusText !== undefined ? e.statusText : e.toString()
            });
            dispatch(toggleLoading());
        }
    };
}

export function resetPw(formProps) {
    console.log(formProps);
    const token = formProps.token.replace(/&/g, ".");
    return async dispatch => {
        dispatch(toggleLoading());
        const config = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Password: formProps.password })
        };
        try {
            const res = await fetch(`${FAIRSHOTS_API}login/pwreset/${token}`, config);
            const info = await res.json();
            console.log(info);
            dispatch({
                type: "AUTH_RESETPASSWORD",
                payload: info
            });
            dispatch(toggleLoading());
        } catch (e) {
            dispatch({
                type: "AUTH_ERROR",
                payload: e.statusText !== undefined ? e.statusText : e.toString()
            });
            dispatch(toggleLoading());
        }
    };
}
