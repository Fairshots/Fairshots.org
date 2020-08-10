import { FAIRSHOTS_API } from "./constants";
import toggleLoading from "./toggleLoading";

export default function getFeatures() {
    return async dispatch => {
        const config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const res = await fetch(`${FAIRSHOTS_API}api/featured`, config);
            if (res.ok) {
                const features = await res.json();
                console.log(features);
                dispatch({
                    type: "GET_FEATURES",
                    payload: features
                });
            } else throw res;
        } catch (e) {
            console.log(e.toString());
            dispatch({
                type: "FEATURES_ERROR",
                payload: e.statusText !== undefined ? e.statusText : e.toString()
            });
        }
    };
}
