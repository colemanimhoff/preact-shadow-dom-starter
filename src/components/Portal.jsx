/* @jsx h */

import { h, Fragment } from "preact";
import { useLayoutEffect, useRef } from "preact/hooks";
import { createPortal } from "preact/compat";
import styled, { StyleSheetManager } from "styled-components";

const Portal = ({ children, ...props }) => {
  const PortalContainer = styled.div`
    all: initial;
  `;

  const node = useRef();
  const portalRoot = document.querySelector("#portal-root");

  useLayoutEffect(() => {
    const { current } = node;
    if (current) {
      portalRoot.appendChild(current);
    }
  }, [node, portalRoot]);

  return (
    <Fragment ref={node} {...props}>
      {createPortal(
        <StyleSheetManager target={portalRoot.shadowRoot}>
          <PortalContainer>{children}</PortalContainer>
        </StyleSheetManager>,
        portalRoot.shadowRoot
      )}
    </Fragment>
  );
};

export default Portal;
