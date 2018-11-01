import { CLOUDINARY_API } from "./constants";

export default async function sendPhotoGetUrl(file) {
    try {
        const fd = new FormData(); // need to improve this
        fd.append("file", file);
        fd.append("upload_preset", "kahvrgme");
        fd.append("eager", "c_crop,g_face,h_400,r_0,w_400/c_scale,w_200");
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
