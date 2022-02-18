import { useState, useEffect } from "react";
export function Form(props) {
  const {
    valuesForm = {},
    onSubmit = () => {},
    textButton = "Guardar",
    type = "create",
  } = props;

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    type == "edit" && setForm(valuesForm);
  }, [valuesForm]);

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        // actualizarPortafolio(params.id, form);
        onSubmit(form);
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
          {textButton}
        </button>
      </div>
    </form>
  );
}
