import React, { useState } from "react";
import Collapse from "./Collapse";
import HoverLink from "./HoverLink";

export interface SideNavCatProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  image?: string;
  name?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const SideNavCat: React.FC<SideNavCatProps> = (props: SideNavCatProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="link-of-navbarlink"
      onMouseEnter={() => {
        setIsHovered(true);
        if (props.onMouseEnter) props.onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (props.onMouseLeave) props.onMouseLeave();
      }}
    >
      {isHovered && (
        <HoverLink className="hover-component" name={props.name}>
          {props.children}
        </HoverLink>
      )}
      <div
        className="side-nav-cat-container d-flex flex-row align-items-center ps-2 text-white pe-2"
        style={{ cursor: "pointer" }}
        onMouseEnter={() => {
          setIsExpanded(isExpanded);
        }}
        onMouseLeave={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <>
          <small className="side-nav-cat-text">{props.name}</small>
        </>
      </div>
      <Collapse isExpanded={isExpanded}>
        <ul
          className="cat-collapsed bg-primary ps-0"
          style={{ listStyleType: "none" }}
        >
          {props.children}
        </ul>
      </Collapse>
    </li>
  );
};

export default SideNavCat;
