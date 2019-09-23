import toggleLoading from "./toggleLoading";
import { FAIRSHOTS_API } from "./constants";

export function sendMessage(fromId, toId, subject, message, token) {
    return async dispatch => {
        dispatch(toggleLoading());
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`
            },
            body: JSON.stringify({ fromId, toId, subject, message })
        };
        try {
            const res = await fetch(`${FAIRSHOTS_API}api/mail`, config);
            if (res.ok) {
                const info = await res.json();
                console.log(info);
                dispatch({
                    type: "MAIL_SENT",
                    payload: info
                });
                dispatch(toggleLoading());
            } else throw await res.text();
        } catch (e) {
            console.log(e);
            dispatch({
                type: "MAIL_ERROR",
                payload: e
            });
            dispatch(toggleLoading());
        }
    };
}

export function contactUs(params) {}
