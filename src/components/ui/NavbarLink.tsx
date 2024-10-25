import React from "react";
import { Link } from "react-router-dom";

export interface NavbarLinkProps {
  to?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = (props: NavbarLinkProps) => {
  return (
    <li className="navbar-link">
      <Link
        className={props.className}
        style={{ textDecoration: "none", ...props.style }}
        to={props.to ?? ""}
      >
        <span>{props.children}</span>
      </Link>
    </li>
  );
};

export default NavbarLink;
