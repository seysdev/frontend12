import { NavLink } from "react-router-dom";
import { Nav } from "../nav/nav";
import "./header.scss";

export function Header() {
  return (
    <header className="header">
      <NavLink className="header__logo" to="/">
        LOGO
      </NavLink>
      <Nav />
    </header>
  );
}
