import { FAIRSHOTS_API } from "./constants";
import toggleLoading from "./toggleLoading";

export default function getAllPhotographers(token = undefined) {
    return async dispatch => {
        dispatch(toggleLoading());
        console.log(token);
        const config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        };
        try {
            const res = await fetch(`${FAIRSHOTS_API}api/photographer/all`, config);
            if (res.ok) {
                const allPhotographers = await res.json();
                console.log(allPhotographers);
                dispatch({
                    type: "GET_ALLPHOTOGRAPHERS",
                    payload: allPhotographers
                });
                dispatch(toggleLoading());
            } else throw res;
        } catch (e) {
            console.log(e.toString());
            dispatch({
                type: "allPhotographers_ERROR",
                payload: e.statusText !== undefined ? e.statusText : e.toString()
            });
            dispatch(toggleLoading());
        }
    };
}
