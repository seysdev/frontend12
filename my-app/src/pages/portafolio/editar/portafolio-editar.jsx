import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export function PagePortafolioEditar() {
  let params = useParams();
  let history = useHistory();

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  function getPortafolio() {
    axios
      .get(
        `https://61ef3d0cd593d20017dbb393.mockapi.io/portafolio/${params.id}`
      )
      .then((respuesta) => {
        console.log("respuesta", respuesta.data);
        setForm(respuesta.data);
      });
  }

  function actualizarPortafolio() {
    axios
      .put(
        `https://61ef3d0cd593d20017dbb393.mockapi.io/portafolio/${params.id}`,
        form
      )
      .then(() => {
        alert("SE EDITO CORRECTAMENTE");
        history.push("/portafolio");
      })
      .catch(() => {
        alert("No se pudo actualizar, intentelo mas tarde");
      });
  }

  useEffect(() => {
    // estado inicial
    getPortafolio();
  }, []);

  return (
    <div>
      <button
        className="bg-lime-700 text-white px-10 py-6 rounded-xl mb-8"
        onClick={() => {
          history.push("/portafolio");
        }}
      >
        VOLVER
      </button>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          actualizarPortafolio();
          //   guardarPortafolio();
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
            ACTUALIZAR
          </button>
        </div>
      </form>
    </div>
  );
}
