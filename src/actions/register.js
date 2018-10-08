const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/fairshots/image/upload";
const FAIRSHOTS_API = "https://node-lvcunha.c9users.io:8080/api/";

export default function register(userType, formProps) {
    return async dispatch => {
        try {
            const fd = new FormData();
            fd.append("file", formProps.pictUrl[0]);
            fd.append("upload_preset", "kahvrgme");
            const imgUp = await fetch(CLOUDINARY_API, {
                method: "POST",
                body: fd
            });
            const imgRes = await imgUp.json();

            const config = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formProps, pictUrl: imgRes.secure_url })
            };
            console.log(config);
            const res = await fetch(`${FAIRSHOTS_API}${userType}`, config);
            const userProfile = await res.json();
            dispatch(
                {
                    type: "REG_SUCCESS",
                    payload: "Registration was successful. Please login now"
                }
            );
        } catch (e) {
            dispatch(
                {
                    type: "REG_ERROR",
                    payload: "Oops! Something went wrong. Plase try again later"
                }
            );
        }
    };
}
