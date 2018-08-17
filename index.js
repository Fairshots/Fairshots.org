import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducer from "./reducers"
import App from "./src/app";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    ), document.getElementById("root")
);
