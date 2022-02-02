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
import { PageExperiencia } from "./pages/experiencia/experiencia";
import { PageContacto } from "./pages/contacto/contacto";
import { PageNotFound } from "./pages/not-found/not-found";
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
            <Route path="/portafolio">
              <PagePortafolio />
            </Route>
            <Route path="/experiencia">
              <PageExperiencia />
            </Route>
            <Route path="/contacto">
              <PageContacto />
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
