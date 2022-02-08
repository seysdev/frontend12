export function PagePortafolioCrear() {
  return (
    <div>
      <h1 className="text-4xl">AGREGA PORTAFOLIO</h1>
      <form action="">
        <div class="sm:grid sm:grid-cols-2 sm:gap-10 mb-10">
          <input
            type="text"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            placeholder="Ingresar titulo"
            required
          />
          <input
            type="text"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            placeholder="Ingresar URL imagen"
            required
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900 col-span-2"
            placeholder="Ingresar descripcion"
            required
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
