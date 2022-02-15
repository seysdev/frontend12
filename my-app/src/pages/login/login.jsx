import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLoginServices } from "services/auth";

export function PageLogin() {
  const [formLogin, setFormLogin] = useState({
    user: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function userExist(user, users) {
    return users.filter((dataUser) => dataUser.user === user.user)[0];
  }

  async function getLogin() {
    try {
      const { data } = await getLoginServices();

      return data;
    } catch (e) {
      console.log("error!!!!");
    }
  }

  async function onSubmit(evt) {
    evt.preventDefault();
    const usuarios = await getLogin();
    const response = userExist(formLogin, usuarios)?.response;
    const isLogin = userExist(formLogin, usuarios)?.response;

    if (isLogin) {
      dispatch({
        type: "SET_IS_LOGIN",
        payload: true,
      });
      dispatch({
        type: "SET_USER",
        payload: response.data,
      });
      history.push("/sobre-mi");
    } else {
      dispatch({
        type: "SET_IS_LOGIN",
        payload: false,
      });
    }
  }

  return (
    <div className="page-login w-4/12 mx-auto">
      <h1 className="text-center">LOGIN</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="border border-gray-400 focus:outline-none focus:border-gray-900 p-4 rounded w-full mb-8"
          value={formLogin.user}
          onChange={(evt) =>
            setFormLogin((state) => ({ ...state, user: evt.target.value }))
          }
        />
        <input
          type="password"
          className="border border-gray-400 focus:outline-none focus:border-gray-900 p-4 rounded w-full mb-8"
          value={formLogin.password}
          onChange={(evt) =>
            setFormLogin((state) => ({ ...state, password: evt.target.value }))
          }
        />
        <div className="text-center">
          <button className="p-6 bg-lime-500 text-white font-bold">
            INGRESAR
          </button>
        </div>
      </form>
    </div>
  );
}
