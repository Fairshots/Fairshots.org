import { CLOUDINARY_API, FAIRSHOTS_API } from "./constants";

export function getProfile(userType, id, token) {
    return async dispatch => {
        const config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`
            }
        };
        try {
            const res = await fetch(`${FAIRSHOTS_API}api/${userType}/${id}`, config);
            const userProfile = await res.json();
            console.log(userProfile);
            dispatch(
                {
                    type: "GET_PROFILE",
                    payload: userProfile
                }
            );
        } catch (e) {
            dispatch(
                {
                    type: "GET_ERROR",
                    payload: e
                }
            );
        }
    };
}

export function other() {
    return {
        type: "XXX",
    };
}
