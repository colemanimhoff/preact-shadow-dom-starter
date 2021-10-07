/* @jsx h */
import { h } from "preact";
import styled, { StyleSheetManager } from "styled-components";

import Portal from "./Portal.jsx";

const Heading = styled.h3`
  color: #e155f5;
  font-family: sans-serif;
`;

const WidgetContainer = styled.div`
  all: initial;
`;

const App = () => {
  return (
    <StyleSheetManager target={document.getElementById("app-root").shadowRoot}>
      <WidgetContainer>
        <Heading>Hey, Shadow DOM!</Heading>
        <Portal>
          <Heading>Hey, Shadow Portal!</Heading>
        </Portal>
      </WidgetContainer>
    </StyleSheetManager>
  );
};

export default App;
