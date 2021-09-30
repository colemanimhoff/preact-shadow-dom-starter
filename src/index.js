/* @jsx h */
import { h, render } from "preact";

import App from "./components/App.jsx";

// shadow portal root

const body = document.getElementsByTagName("body")[0];
const portalRoot = document.createElement("div");
portalRoot.setAttribute("id", "portal-root");
portalRoot.attachShadow({
  mode: "open",
});
body.appendChild(portalRoot);

// app shadow root

const appRoot = document.querySelector("#app-root");
appRoot.attachShadow({
  mode: "open",
});

render(<App />, appRoot.shadowRoot);

// hot module replacement
if (module.hot) {
  module.hot.accept("./components/App.jsx", () => {
    const NextApp = require("./components/App.jsx").default;
    render(<NextApp />, appRoot.shadowRoot);
  });
}
