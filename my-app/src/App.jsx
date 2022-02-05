import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

import { PageSobreMi } from "./pages/sobre-mi/sobre-mi";
import { PagePortafolio } from "./pages/portafolio/portafolio";
import { PagePortafolioCrear } from "./pages/portafolio/crear/portafolio-crear";
import { PagePortafolioDetalle } from "./pages/portafolio/detalle/portafolio-detalle";
import { PagePortafolioEditar } from "./pages/portafolio/editar/portafolio-editar";
import { PageExperiencia } from "./pages/experiencia/experiencia";
import { PageContacto } from "./pages/contacto/contacto";
import { PageNotFound } from "./pages/not-found/not-found";
import { PageConceptos } from "./pages/conceptos/conceptos";
import { PageAntDesign } from "./pages/ant-design/ant-design";
import "antd/dist/antd.css";
import "./assets/style/main.scss";
import { Card } from "./components/card/card";
/*
Componente wrapper
*/
export function App() {
  const { SubMenu } = Menu;
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Main>
          <div className="flex">
            <Menu
              onClick={handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <SubMenu
                key="sub2"
                icon={<AppstoreOutlined />}
                title="MENU PRINCIPAL"
              >
                <Menu.Item key="1">
                  <NavLink to="/sobre-mi" activeClassName="is-active">
                    Sobre mi
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink to="/portafolio" activeClassName="is-active">
                    Portafolio
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                  <NavLink to="/experiencia" activeClassName="is-active">
                    Experiencia
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                  <NavLink to="/contacto" activeClassName="is-active">
                    Contacto
                  </NavLink>
                </Menu.Item>
              </SubMenu>
            </Menu>
            <div className="p-10">
              <Switch>
                <Route path="/sobre-mi">
                  <PageSobreMi />
                </Route>
                <Route exact path="/portafolio">
                  <PagePortafolio />
                </Route>
                <Route path="/portafolio/crear">
                  <PagePortafolioCrear />
                </Route>
                <Route path="/portafolio/editar/:id">
                  <PagePortafolioEditar />
                </Route>
                <Route path="/portafolio/:id">
                  <PagePortafolioDetalle />
                </Route>
                <Route path="/experiencia">
                  <PageExperiencia />
                </Route>
                <Route path="/contacto">
                  <PageContacto />
                </Route>
                <Route path="/conceptos">
                  <PageConceptos />
                </Route>
                <Route path="/ant-design">
                  <PageAntDesign />
                </Route>
                <Redirect exact from="/" to="/sobre-mi" />
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
            </div>
          </div>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}
