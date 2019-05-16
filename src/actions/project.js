import { FAIRSHOTS_API } from "./constants";
import toggleLoading from "./toggleLoading";

export function postProject(formProps, id, token) {
    console.log(formProps);
    return async dispatch => {
        dispatch(toggleLoading());
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`
            },
            body: JSON.stringify({ ...formProps, organizationId: id })
        };
        console.log(config);
        try {
            const res = await fetch(`${FAIRSHOTS_API}api/project`, config);
            if (res.ok) {
                const info = await res.json();
                console.log(info);
                dispatch({
                    type: "PROJECT_CREATED",
                    payload: info
                });
                dispatch(toggleLoading());
            } else throw await res.text();
        } catch (e) {
            dispatch({
                type: "PROJECT_ERROR",
                payload: e
            });
            dispatch(toggleLoading());
        }
    };
}

export function getProject(id, token) {
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
            const res = await fetch(`${FAIRSHOTS_API}api/project/${id}`, config);
            if (res.ok) {
                const info = await res.json();
                console.log(info);
                dispatch({
                    type: "GET_PROJECT",
                    payload: info
                });
                dispatch(toggleLoading());
            } else throw await res.text();
        } catch (e) {
            dispatch({
                type: "PROJECT_ERROR",
                payload: e
            });
            dispatch(toggleLoading());
        }
    };
}
