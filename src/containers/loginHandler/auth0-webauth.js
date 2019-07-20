import auth0 from "auth0-js";

const Auth0 = new auth0.WebAuth({
    domain: "curly-waterfall-1934.auth0.com",
    clientID: "Sw0UdTyMoz6UnDkyAWQcJL1Kwj6yxA2g",
    responseType: "token id_token",
    audience: "http://18.188.223.59:8080/login/auth0",
    redirectUri: "http://localhost:8080/login/callback",
    scope: "openid profile"
});

export default Auth0;
