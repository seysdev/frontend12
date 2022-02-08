import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "../dropdown/dropdown";
import "./nav.scss";

export function Nav() {
  const [togglePortafolio, setTogglePortafolio] = useState(false);

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/sobre-mi" activeClassName="is-active">
            Sobre mi
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="is-active"
            to="/portafolio"
            onClick={(e) => {
              e.preventDefault();
              e.target.classList.toggle("is-active");
              setTogglePortafolio(!togglePortafolio);
            }}
          >
            Portafolio
          </NavLink>
          {togglePortafolio && (
            <Dropdown
              items={[
                { url: "/portafolio", text: "Portafolio" },
                { url: "/portafolio/crear", text: "Crear" },
              ]}
            />
          )}
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
