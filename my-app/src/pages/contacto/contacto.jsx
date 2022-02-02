import "./contacto.scss";

export function PageContacto() {
  return (
    <div className="page-contacto">
      <form>
        <div class="sm:grid sm:grid-cols-2 sm:gap-10">
          <input
            type="text"
            placeholder="Nombre"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            required
          />
          <input
            type="text"
            placeholder="Telefono"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            required
          />
          <input
            type="text"
            placeholder="Correo"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            required
          />
          <select
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            required
          >
            <option value="">Seleccionar pais</option>
            <option value="peru">Peru</option>
            <option value="venezuela">Venezuela</option>
            <option value="chile">Chile</option>
            <option value="uruguay">Uruguay</option>
          </select>
          <select
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            required
          >
            <option value="">Presupuesto</option>
            <option value="500-1000">500 a 1000</option>
            <option value="1000-1500">1000 a 1500</option>
            <option value="1500-2000">1500 a 2000</option>
          </select>
          <textarea
            className="w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900 col-span-2"
            placeholder="Agrega un comentario"
            rows="10"
            required
          ></textarea>
        </div>
        <div className="flex justify-center pt-10">
          <button className="bg-sky-600 py-8 px-20 text-white rounded-xl min-w">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
