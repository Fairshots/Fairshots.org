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
            if (res.ok) {
                const userProfile = await res.json();
                dispatch(
                    {
                        type: "GET_PROFILE",
                        payload: userProfile
                    }

                );
            } else throw res;
        } catch (e) {
            console.log(e);
            dispatch(
                {
                    type: "PROFILE_ERROR",
                    payload: typeof e === "object" ? e.statusText : e.toString()
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
