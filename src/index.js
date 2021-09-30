const appRoot = document.querySelector("#app-root");
appRoot.innerHTML = "Hello world";

if (module.hot) {
  module.hot.accept();
}
