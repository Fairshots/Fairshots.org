export default function register(userType, formProps) {
    return async dispatch => {
        try {
            const config = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formProps, pictUrl: formProps.pictUrl[0].name })
            };
            console.log(config);
            const res = await fetch(`https://node-lvcunha.c9users.io:8080/api/${userType}`, config);
            const userProfile = await res.json();
            dispatch(
                {
                    type: "REG_SUCCESS",
                    payload: userProfile
                }
            );
        } catch (e) {
            dispatch(
                {
                    type: "REG_ERROR",
                    payload: "Oops! Something went wrong"
                }
            );
        }
    };
}
