import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
import 'antd/dist/antd.css';
import "./assets/style/main.scss";
import { Card } from "./components/card/card";
/*
Componente wrapper
*/
export function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Main>
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
            <Redirect exact from="/" to="/sobre-mi" />
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}
