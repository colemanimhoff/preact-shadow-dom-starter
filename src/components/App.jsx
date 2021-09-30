/* @jsx h */
import { h } from "preact";
import styled from "styled-components";

import { StyleSheetManager } from "styled-components";

const Heading = styled.h1`
  color: pink;
`;

const App = () => {
  return (
    <StyleSheetManager target={document.getElementById("app-root").shadowRoot}>
      <Heading>Hey, Shadow DOM!</Heading>
    </StyleSheetManager>
  );
};

export default App;
