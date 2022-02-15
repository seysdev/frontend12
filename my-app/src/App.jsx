import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

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
import { PageTodoList } from "./pages/todo-list/todo-list";
import { PageLogin } from "./pages/login/login";
import { PageLogout } from "./pages/logout/logout";
import "./assets/style/main.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import history from "./utils/history/history";
/*
Componente wrapper
*/
export function App() {
  return (
    <Provider store={store}>
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
              {store.getState().auth.isLogin ? (
                <Route path="/portafolio/crear">
                  <PagePortafolioCrear />
                </Route>
              ) : (
                history.push("/login")
              )}
              {/* <Route
                path="/portafolio/crear"
                render={(routeProps) => {
                  return store.getState().auth.isLogin ? (
                    <PagePortafolioCrear />
                  ) : (
                    routeProps.history.push("/login")
                  );
                }}
              /> */}
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
              <Route path="/todo-list">
                <PageTodoList />
              </Route>
              <Route path="/login">
                <PageLogin />
              </Route>
              <Route path="/logout">
                <PageLogout />
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
      
    </Provider>
  );
}
