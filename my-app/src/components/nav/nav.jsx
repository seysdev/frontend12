import {useState} from "react"
import { NavLink, useHistory } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./nav.scss";
export function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history =useHistory()

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/sobre-mi" activeClassName="is-active">
            Sobre mi
          </NavLink>
        </li>
        <li>
          {/* <NavLink to="/portafolio" activeClassName="is-active">
            Portafolio
          </NavLink> */}
          <a className="cursor-pointer" onClick={handleClick}>Portafolio</a>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {
          handleClose()
          history.push("/portafolio")
        }}>Portafolio</MenuItem>
        <MenuItem onClick={() => {
          handleClose()
          history.push("/portafolio/crear")
        }}>Crear</MenuItem>
        
      </Menu>
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
