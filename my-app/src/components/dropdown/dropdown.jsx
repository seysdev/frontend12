import { NavLink } from "react-router-dom";
import "./dropdown.scss";
export function Dropdown(props) {
  const { items = [] } = props;

  return (
    <ul className="dropdown">
      {items.map((item) => (
        <li cb={item.cb}>
          <NavLink to={item.url} activeClassName="is-active">
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
