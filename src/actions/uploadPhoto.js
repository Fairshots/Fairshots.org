import { CLOUDINARY_API, FAIRSHOTS_API } from "./constants";

export default function uploadPhoto(userType, id, token, url) {
    return async dispatch => {
        try {
            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `bearer ${token}`
                },
                body: JSON.stringify({ photos: [{ [`${userType}Id`]: id, cloudlink: url }] })

            };
            console.log(config);
            const res = await fetch(`${FAIRSHOTS_API}api/${userType}/${id}/photos`, config);
            const ret = await res.json();
            console.log(ret);
            dispatch(
                {
                    type: "PHOTO_UPLOADED",
                    payload: ret
                }
            );
        } catch (e) {
            console.log(e);
            dispatch(
                {
                    type: "UPLOAD_ERROR",
                    payload: "Oops! Something went wrong. Plase try again"
                }
            );
        }
    };
}
