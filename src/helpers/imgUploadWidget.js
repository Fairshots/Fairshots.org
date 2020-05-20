const imgUploadWidget = changeHandler => {
    const _ = window.cloudinary.openUploadWidget(
        { cloudName: "fairshots", uploadPreset: "kahvrgme" },
        (error, result) => {
            if (result.event === "success") {
                changeHandler(result.info.secure_url);
            }
        }
    );
};

export default imgUploadWidget;
