/* @jsx h */
import { Fragment, h } from "preact";
import styled, { StyleSheetManager } from "styled-components";

import Portal from "./Portal.jsx";

const Heading = styled.h3`
  color: #e155f5;
  font-family: sans-serif;
`;

const App = () => {
  return (
    <StyleSheetManager target={document.getElementById("app-root").shadowRoot}>
      <Fragment>
        <Heading>Hey, Shadow DOM!</Heading>
        <Portal>
          <Heading>Hey, Shadow Portal!</Heading>
        </Portal>
      </Fragment>
    </StyleSheetManager>
  );
};

export default App;
