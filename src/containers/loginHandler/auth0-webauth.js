import auth0 from "auth0-js";
import { FAIRSHOTS_API } from "../../actions/constants";

const Auth0 = new auth0.WebAuth({
    domain: "curly-waterfall-1934.auth0.com",
    clientID: "Sw0UdTyMoz6UnDkyAWQcJL1Kwj6yxA2g",
    responseType: "token id_token",
    audience: `${FAIRSHOTS_API.slice(0, -1)}`,
    redirectUri: "http://localhost:8080/login/callback",
    scope: "openid profile email"
});

export default Auth0;
