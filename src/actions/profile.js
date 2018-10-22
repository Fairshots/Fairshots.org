import { FAIRSHOTS_API } from "./constants";
import sendPhotoGetUrl from "./sendPhotoGetUrl";

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

export function update(userType, formProps, token) {
    return async dispatch => {
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`
            }
        };
        try {
            let imgRes = "";
            if (formProps.pictUrl[0] || formProps.logo[0]) {
                if (userType === "photographer") {
                    imgRes = await sendPhotoGetUrl(formProps.pictUrl[0]);
                    config.body = JSON.stringify({ ...formProps, pictUrl: imgRes.secure_url });
                } else {
                    imgRes = await sendPhotoGetUrl(formProps.logo[0]);
                    config.body = JSON.stringify({ ...formProps, logo: imgRes.secure_url, funding: formProps.funding === "Yes" });
                }
            } else {
                config.body = userType === "photographer" ? JSON.stringify({ ...formProps })
                    : JSON.stringify({ ...formProps, funding: formProps.funding === "Yes" });
            }

            console.log(config);

            const res = await fetch(`${FAIRSHOTS_API}api/${userType}/${id}`, config);
            if (res.ok) {
                const userProfile = await res.json();
                dispatch(
                    {
                        type: "UPDATE_PROFILE",
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
