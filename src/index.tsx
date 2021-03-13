import React, { Suspense } from "react";

import ReactDOM from "react-dom";

import App from "./App";

import "./i18n";

const hostElement = document.getElementById("root");

if (hostElement) {
    ReactDOM.render(
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>,
        hostElement
    );
} else {
    console.warn("root is null");
}
