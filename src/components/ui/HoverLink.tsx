import React from "react";
import "./HoverMenu.css";

export interface HoverMenuProps {
  children?: React.ReactNode;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HoverLink: React.FC<HoverMenuProps> = (props: HoverMenuProps) => {
  return (
    <div
      className={"hover-link" + (props.className ? " " + props.className : "")}
      style={props.style}
    >
      <small className="hover-link-name">{props.name}</small>
      <ul className="hover-link-link" style={{ listStyle: "none" }}>
        {props.children}
      </ul>
    </div>
  );
};

export default HoverLink;
