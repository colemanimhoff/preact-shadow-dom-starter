/* @jsx h */
import { h, render } from "preact";

import App from "./components/App.jsx";

const appRoot = document.querySelector("#app-root");
appRoot.attachShadow({
  mode: "open",
});

render(<App />, appRoot.shadowRoot);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept("./components/App.jsx", () => {
    const NextApp = require("./components/App.jsx").default;
    render(<NextApp />, appRoot.shadowRoot);
  });
}
