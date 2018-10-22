import { CLOUDINARY_API } from "./constants";

export default async function sendPhotoGetUrl(file) {
    try {
        const fd = new FormData(); // need to improve this
        fd.append("file", file);
        fd.append("upload_preset", "kahvrgme");
        const imgUp = await fetch(CLOUDINARY_API, {
            method: "POST",
            body: fd
        });
        const imgRes = await imgUp.json();
        return;
    } catch (e) {
        throw e;
    }
}
