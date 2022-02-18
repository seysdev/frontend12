import { savePortafolioServices } from "services/portafolio";
import { useHistory } from "react-router-dom";
import { Form } from "../component/form";

export function PagePortafolioCrear() {
  let history = useHistory();

  async function guardarPortafolio(values) {
    try {
      await savePortafolioServices(values);
      history.push("/portafolio");
    } catch (e) {
      alert("No se pudo realizar la grabacion , intentalo mas tarde");
    }
    // axios
    //   .post("https://61ef3d0cd593d20017dbb393.mockapi.io/portafolio", values)
    //   .then(() => {
    //     alert("Se grabo correctamente");
    //     history.push("/portafolio");
    //   })
    //   .catch(() => {
    //     alert("No se pudo realizar la grabacion , intentalo mas tarde");
    //   });
  }

  return (
    <div>
      <h1 className="text-4xl">AGREGA PORTAFOLIO</h1>
      <Form
        onSubmit={async (values) => {
          await guardarPortafolio(values);
        }}
      />
      {/* <form
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
      </form> */}
    </div>
  );
}
