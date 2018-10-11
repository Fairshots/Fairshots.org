import { CLOUDINARY_API, FAIRSHOTS_API } from "./constants";

export function register(userType, formProps) {
    return async dispatch => {
        try {
            const fd = new FormData(); // need to improve this
            if (userType === "photographer") {
                fd.append("file", formProps.pictUrl[0]);
            } else {
                fd.append("file", formProps.logo[0]);
            }
            fd.append("upload_preset", "kahvrgme");
            const imgUp = await fetch(CLOUDINARY_API, {
                method: "POST",
                body: fd
            });
            const imgRes = await imgUp.json();

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
