import { FAIRSHOTS_API } from "./constants";

export function login(formProps) {
    return async dispatch => {
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
            dispatch(
                {
                    type: "AUTH_SUCCESS",
                    payload: usertoSave
                }
            );
        } catch (e) {
            dispatch(
                {
                    type: "AUTH_ERROR",
                    payload: "email or password incorrect or doesn`t exist"
                }
            );
        }
    };
}

export function logout() {
    return {
        type: "AUTH_LOGOUT",
    };
}
