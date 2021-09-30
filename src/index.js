/* @jsx h */
import { h, render } from "preact";

import App from "./components/App.jsx";

const appRoot = document.querySelector("#app-root");

render(<App />, appRoot);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
