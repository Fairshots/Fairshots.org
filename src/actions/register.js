import { FAIRSHOTS_API } from "./constants";
import sendPhotoGetUrl from "./sendPhotoGetUrl";

export function register(userType, formProps) {
    return async dispatch => {
        try {
            let imgRes = { secure_url: "/images/org-logo.png" };
            if (formProps.pictUrl[0] || formProps.logo[0]) {
                if (userType === "photographer") {
                    imgRes = await sendPhotoGetUrl(formProps.pictUrl[0]);
                } else {
                    imgRes = await sendPhotoGetUrl(formProps.logo[0]);
                }
            }
            const config = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: userType === "photographer" ? JSON.stringify({ ...formProps, pictUrl: imgRes.secure_url })
                    : JSON.stringify({ ...formProps, logo: imgRes.secure_url, funding: formProps.funding === "Yes" })
            };
            console.log(config);
            const res = await fetch(`${FAIRSHOTS_API}api/${userType}`, config);
            const userProfile = await res.json();
            console.log(userProfile);
            dispatch(
                {
                    type: "REG_SUCCESS",
                    payload: "Registration was successful. Please login now"
                }
            );
        } catch (e) {
            console.log(e);
            dispatch(
                {
                    type: "REG_ERROR",
                    payload: "Oops! Something went wrong. Plase try again"
                }
            );
        }
    };
}

export function checkForm() {
    return {
        type: "REG_CHECKFORM",
        payload: "Please check your form"
    };
}

export function resetMessages() {
    return {
        type: "REG_RESET"
    };
}
