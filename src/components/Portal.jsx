/* @jsx h */

import { h, Fragment } from "preact";
import { useLayoutEffect, useRef } from "preact/hooks";
import { createPortal } from "preact/compat";
import { StyleSheetManager } from "styled-components";

const Portal = ({ children, ...props }) => {
  const node = useRef();
  const portalRoot = document.getElementById("portal-root");

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
          {children}
        </StyleSheetManager>,
        portalRoot.shadowRoot
      )}
    </Fragment>
  );
};

export default Portal;
