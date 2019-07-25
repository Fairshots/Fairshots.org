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
            if (res.ok) {
                const usertoSave = await res.json();
                console.log(usertoSave);
                localStorage.setItem("user", JSON.stringify(usertoSave));
                dispatch({
                    type: "AUTH_SUCCESS",
                    payload: usertoSave
                });
                dispatch(toggleLoading());
            } else throw res;
        } catch (e) {
            dispatch({
                type: "AUTH_ERROR",
                payload: "email or password incorrect or doesn`t exist"
            });
            dispatch(toggleLoading());
        }
    };
}

export function social(userInfo, token) {
    return async dispatch => {
        dispatch(toggleLoading());
        const config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`
            }
        };
        try {
            const res = await fetch(`${FAIRSHOTS_API}login/auth0`, config);
            if (res.ok) {
                const usertoSave = await res.json();
                console.log(usertoSave);
                localStorage.setItem("user", JSON.stringify(usertoSave));
                dispatch({
                    type: "AUTH_SUCCESS",
                    payload: usertoSave
                });
                dispatch(toggleLoading());
            } else throw res;
        } catch (e) {
            console.log(e);
            dispatch({
                type: "FORWARD_SIGN_UP",
                payload: userInfo
            });
            dispatch(toggleLoading());
        }
    };
}

export function saveAuth0Token(token) {
    return {
        type: "AUTH0_TOKEN",
        payload: token
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
            if (res.ok) {
                const info = await res.json();
                console.log(info);
                dispatch({
                    type: "AUTH_FORGOT",
                    payload: info
                });
                dispatch(toggleLoading());
            } else throw await res.text();
        } catch (e) {
            console.log(e);
            dispatch({
                type: "AUTH_ERROR",
                payload: e
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
            if (res.ok) {
                const info = await res.json();
                console.log(info);
                dispatch({
                    type: "AUTH_RESETPASSWORD",
                    payload: info
                });
                dispatch(toggleLoading());
            } else throw await res.text();
        } catch (e) {
            dispatch({
                type: "AUTH_ERROR",
                payload: e
            });
            dispatch(toggleLoading());
        }
    };
}
