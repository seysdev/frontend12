import { NavLink } from "react-router-dom";

import "./nav.scss";
export function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/sobre-mi" activeClassName="is-active">
            Sobre mi
          </NavLink>
        </li>
        <li>
          <NavLink to="/portafolio" activeClassName="is-active">
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/experiencia" activeClassName="is-active">
            Experiencia
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" activeClassName="is-active">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
