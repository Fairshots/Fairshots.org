import { CLOUDINARY_API } from "./constants";

export default async function sendPhotoGetUrl(file, upreset = "kahvrgme") {
    try {
        const fd = new FormData(); // need to improve this
        fd.append("file", file);
        fd.append("upload_preset", upreset);
        const imgUp = await fetch(CLOUDINARY_API, {
            method: "POST",
            body: fd
        });
        const imgRes = await imgUp.json();
        console.log(imgRes);
        return imgRes;
    } catch (e) {
        throw e;
    }
}
