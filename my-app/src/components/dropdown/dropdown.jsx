import { NavLink } from "react-router-dom";
import "./dropdown.scss";
export function Dropdown(props) {
  const { items = [] } = props;

  return (
    <ul className="dropdown">
      {items.map((item, id) => (
        <li cb={item.cb} key={id}>
          <NavLink to={item.url} activeClassName="is-active">
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
