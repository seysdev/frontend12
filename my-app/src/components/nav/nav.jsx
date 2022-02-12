import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "../dropdown/dropdown";
import "./nav.scss";
import { useSelector } from "react-redux";

export function Nav() {
  const [togglePortafolio, setTogglePortafolio] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const isLogin = useSelector((state) => state.auth.isLogin);

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
              if (isLogin) {
                e.preventDefault();
                e.target.classList.toggle("is-active");
                setTogglePortafolio(!togglePortafolio);
              }
            }}
          >
            Portafolio
          </NavLink>
          {isLogin && togglePortafolio && (
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
        {user ? (
          <li>
            <span
              onClick={() => {
                setToggleLogin(!toggleLogin);
              }}
            >
              Bienvenido {user.name}
            </span>
            {toggleLogin && (
              <Dropdown
                items={[
                  {
                    url: "/logout",
                    text: "logout",
                  },
                ]}
              />
            )}
          </li>
        ) : (
          <li>
            <NavLink to="/login" activeClassName="is-active">
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
