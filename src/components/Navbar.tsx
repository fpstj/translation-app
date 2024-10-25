import React from "react";
import NavbarLink from "./ui/NavbarLink";

export interface NavbarProps {
  className?: string;
  id?: string;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <div className={"w-100" + props.className}>
      <NavbarLink className="text-dark" to="/">
        <span className="home-link">Home</span>
      </NavbarLink>
      <NavbarLink className="text-dark" to="/translations">
        <span className="translations-link">Translations</span>
      </NavbarLink>
      <NavbarLink className="text-dark" to="/interpreting">
        <span className="translations-link">Interpreting</span>
      </NavbarLink>
      <NavbarLink className="text-dark" to="/proofreading">
        <span className="translations-link">Proofreading</span>
      </NavbarLink>
      <NavbarLink className="text-dark" to="/textediting">
        <span className="translations-link">Text editing</span>
      </NavbarLink>
      <NavbarLink className="text-dark" to="/courses">
        <span className="translations-link">Courses</span>
      </NavbarLink>
      <NavbarLink className="text-dark" to="/clients">
        <span className="translations-link">Clients</span>
      </NavbarLink>
      <NavbarLink className="text-dark" to="/contact">
        <span className="translations-link">Contact</span>
      </NavbarLink>
      <NavbarLink className="text-dark" to="/about">
        <span className="translations-link">About us</span>
      </NavbarLink>
    </div>
  );
};

export default Navbar;
