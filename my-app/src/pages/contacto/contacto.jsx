import {useState} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Select } from 'antd';
import { Carousel } from 'antd';
import "./contacto.scss";
import { Collapse } from 'antd';


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const { Panel } = Collapse;
const { Option } = Select;
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

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  function saveContact(form) {
    axios.post("https://61ef3d0cd593d20017dbb393.mockapi.io/contacto", form)
    .then(() => {
      alert("se guardo correctamente")
      history.push("sobre-mi")
    }).catch(() => {
      alert("No se pudo guardar, intentelo denuevo")
    })
  }

  return (
    <div className="page-contacto">
      {/* <form onSubmit={(event) => {
        event.preventDefault()
        saveContact()
      }}>
        <div class="sm:grid sm:grid-cols-2 sm:gap-10">
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
      </form> */}
      <Form  
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={(values) => {
          console.log("valores", values)
          saveContact(values)
        }}
        onFinishFailed={(errorInfo) => {
          console.log('Failed:', errorInfo);
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[
            {
              required: true,
              message: 'Ingresa el nombre por favor',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellido"
          name="apellido"
          rules={[
            {
              required: true,
              message: 'Ingresa el apellido por favor',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Telefono"
          name="telefono"
          rules={[
            {
              required: true,
              message: 'Ingresa el telefono por favor',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Correo"
          name="correo"
          rules={[
            {
              required: true,
              message: 'Ingresa el correo por favor',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Pais"
          name="pais"
          rules={[
            {
              required: true,
              message: 'Ingresa el pais por favor',
            },
          ]}
        >
          <Select
            onChange={(value) => {console.log("value", value)}}
            allowClear
          >
            <Option value="peru">Peru</Option>
            <Option value="argentina">Argentina</Option>
            <Option value="brasil">Brasil</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Presupuesto"
          name="presupuesto"
          rules={[
            {
              required: true,
              message: 'Ingresa el presupuesto por favor',
            },
          ]}
        >
          <Select
            onChange={(value) => {console.log("value", value)}}
            allowClear
          >
            <Option value="500-1000">500 a 1000</Option>
            <Option value="1000-1500">1000 a 1500</Option>
            <Option value="1500-2000">1500 a 2000</Option>
          </Select>
        </Form.Item>
        <div
          className="flex justify-center"
        >
          <Button type="secondary" htmlType="submit">
            Registrar
          </Button>
        </div>
      </Form>
      <Carousel afterChange={(a, b, c) => {
          console.log(a, b, c);
      }}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <br /><br />
      <Collapse defaultActiveKey={['1']} onChange={(key) => {
        console.log("key", key)
      }}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
}
