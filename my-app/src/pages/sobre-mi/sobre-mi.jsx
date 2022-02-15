import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card } from "../../components/card/card";
import "./sobre-mi.scss";
import { getPortafolioServices } from "services/portafolio";

export function PageSobreMi() {
  let history = useHistory();

  const [datosPortafolio, setDatosPortafolio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.auth.isLogin);

  async function getPortafolio() {
    try {
      const { data } = await getPortafolioServices();
      return data;
    } catch (e) {
      alert("No cargo correctamente vuelvelo a intentar");
    }
  }

  // ME VA DAR EL ESTADO INICIAL DEL COMPONENTE
  useEffect(async () => {
    const data = await getPortafolio();
    setIsLoading(false);
    setDatosPortafolio(data);
  }, []);

  return !isLoading ? (
    <div className="page-sobre-mi">
      <h1>SOBRE MI </h1>
      <button
        onClick={() => {
          history.push("experiencia");
        }}
      >
        INGRESAR
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
        adipisci voluptatibus doloremque atque magni perferendis delectus modi
        hic. Fugit obcaecati pariatur nostrum sint praesentium quia tempora sunt
        veritatis, reiciendis quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
        adipisci voluptatibus doloremque atque magni perferendis delectus modi
        hic. Fugit obcaecati pariatur nostrum sint praesentium quia tempora sunt
        veritatis, reiciendis quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
        adipisci voluptatibus doloremque atque magni perferendis delectus modi
        hic. Fugit obcaecati pariatur nostrum sint praesentium quia tempora sunt
        veritatis, reiciendis quis?
      </p>
      {datosPortafolio.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {datosPortafolio.map((portafolio, id) => (
            <Card
              key={id}
              image={portafolio.image}
              title={portafolio.title}
              description={portafolio.description}
              id={portafolio.id}
              isLogin={isLogin}
            />
          ))}
        </div>
      ) : (
        <h2 className="text-4xl font-bold bg-red-300 p-10 rounded-xl text-center text-white">
          NO HAY DATOS AUN
        </h2>
      )}
    </div>
  ) : (
    ""
  );
}
