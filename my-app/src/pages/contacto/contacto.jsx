import {useState} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';

import "./contacto.scss";

export function PageContacto() {
  let history = useHistory();
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    pais: '',
    presupuesto: '',
    comentario: ''
  })
  const [open, setOpen] = useState(false);

  function saveContact() {
    axios.post("https://61ef3d0cd593d20017dbb393.mockapi.io/contacto", form)
    .then(() => {
      setOpen(true);
      history.push("sobre-mi")
    }).catch(() => {
      alert("No se pudo guardar, intentelo denuevo")
    })
  }

  return (
    <div className="page-contacto">
      <form onSubmit={(event) => {
        event.preventDefault()
        saveContact()
      }}>
        <div className="sm:grid sm:grid-cols-2 sm:gap-10">
          <input
            type="text"
            placeholder="Nombre"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            value={form.nombre}
            required
            onChange={(event) => {
              // console.log(event.target.value)
              // const copyObject = {...form, nombre: event.target.value}
              // setForm(copyObject)

              setForm((state) => ({...state, nombre: event.target.value}))
            }}
          />
          <input
            type="text"
            placeholder="Apellido"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            value={form.apellido}
            required
            onChange={(event) => {
              setForm((state) => ({...state, apellido: event.target.value}))
            }}
          />
          <input
            type="text"
            placeholder="Telefono"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            value={form.telefono}
            required
            onChange={(event) => {
              setForm((state) => ({...state, telefono: event.target.value}))
            }}
          />
          <input
            type="text"
            placeholder="Correo"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            required
            value={form.correo}
            onChange={(event) => {
              setForm((state) => ({...state, correo: event.target.value}))
            }}
          />
          <select
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            required
            value={form.pais}
            onChange={(event) => {
              setForm((state) => ({...state, pais: event.target.value}))
            }}
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
            value={form.presupuesto}
            onChange={(event) => {
              setForm((state) => ({...state, presupuesto: event.target.value}))
            }}
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
            value={form.comentario}
            onChange={(event) => {
              setForm((state) => ({...state, comentario: event.target.value}))
            }}
          ></textarea>
        </div>
        <div className="flex justify-center pt-10">
          <button className="bg-sky-600 py-8 px-20 text-white rounded-xl min-w">
            Guardar
          </button>
        </div>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Se guardo registro"
      />
    </div>
  );
}
