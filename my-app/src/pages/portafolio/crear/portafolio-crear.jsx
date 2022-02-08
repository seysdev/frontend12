import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export function PagePortafolioCrear() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });
  let history = useHistory();

  function guardarPortafolio() {
    axios
      .post("https://61ef3d0cd593d20017dbb393.mockapi.io/portafolio", form)
      .then(() => {
        alert("Se grabo correctamente");
        history.push("/portafolio");
      })
      .catch(() => {
        alert("No se pudo realizar la grabacion , intentalo mas tarde");
      });
  }

  return (
    <div>
      <h1 className="text-4xl">AGREGA PORTAFOLIO</h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          guardarPortafolio();
          console.log("form", form);
        }}
      >
        <div className="sm:grid sm:grid-cols-2 sm:gap-10 mb-10">
          <input
            type="text"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            placeholder="Ingresar titulo"
            required
            value={form.title}
            onChange={(evt) => {
              setForm((state) => ({ ...state, title: evt.target.value }));
            }}
          />
          <input
            type="text"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            placeholder="Ingresar URL imagen"
            required
            value={form.image}
            onChange={(evt) => {
              setForm((state) => ({ ...state, image: evt.target.value }));
            }}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900 col-span-2"
            placeholder="Ingresar descripcion"
            required
            value={form.description}
            onChange={(evt) => {
              setForm((state) => ({ ...state, description: evt.target.value }));
            }}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-lime-700 text-white px-10 py-6 rounded-xl">
            AGREGAR
          </button>
        </div>
      </form>
    </div>
  );
}
