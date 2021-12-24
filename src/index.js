import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.scss";
import { Helmet } from "react-helmet";

ReactDOM.render(
    <BrowserRouter>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Nedim Akar</title>
        </Helmet>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
