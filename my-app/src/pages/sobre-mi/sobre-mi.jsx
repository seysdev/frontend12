import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card } from "../../components/card/card";
import { getPortafolioServices } from "services/portafolio";
import "./sobre-mi.scss";
// import axios from "axios";

export function PageSobreMi() {
  let history = useHistory();

  const [datosPortafolio, setDatosPortafolio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const count = useSelector((state) => state.general.count);
  const isLogin = useSelector((state) => state.auth.isLogin);

  async function getPortafolio() {
    // try {
    //   const { data } = await axios.get("http://localhost:3000/portafolio");
    //   console.log("data", data);
    //   setDatosPortafolio(data);
    // } catch (e) {
    //   alert("No cargo correctamente vuelvelo a intentar");
    // }

    try {
      const { data } = await getPortafolioServices();
      setDatosPortafolio(data);
    } catch (e) {
      alert("No cargo correctamente vuelvelo a intentar");
    }
  }

  // ME VA DAR EL ESTADO INICIAL DEL COMPONENTE
  useEffect(() => {
    (async () => {
      await getPortafolio();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-sobre-mi">
      <h1>SOBRE MI {count}</h1>
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
      {datosPortafolio.length > 0 && (
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
      )}
    </div>
  );
}
