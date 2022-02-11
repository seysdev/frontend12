import { NavLink } from "react-router-dom";
import { Nav } from "../nav/nav";
import "./header.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export function Header() {
  const dispatch = useDispatch();


  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink className="header__logo" to="/">
          LOGO
        </NavLink>
        <Nav />
        <button
          className="bg-lime-300 p-4 rounded"
          onClick={() => {
            console.log("incrementar");
            dispatch({
              type: "INCREMENT",
            });
          }}
        >
          INCREMENTAR
        </button>
        <button
          className="bg-lime-300 p-4 rounded"
          onClick={() => {
            console.log("decrementar");
            dispatch({
              type: "DECREMENT",
              payload: true,
            });
          }}
        >
          DECREMENTAR
        </button>
      </div>
    </header>
  );
}
