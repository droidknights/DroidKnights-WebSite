"use client";

import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  selector: string;
}

function Portal({ children, selector }: PortalProps) {
  const element = typeof window !== "undefined" && document.querySelector(selector);
  return element && children ? ReactDOM.createPortal(children, element) : <div />;
}

export default Portal;
