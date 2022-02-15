import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getPortafolioServices,
  deletePortafolioServices,
} from "services/portafolio";
import { Card } from "../../components/card/card";
import "./portafolio.scss";

export function PagePortafolio() {
  const [portafolios, setPortafolios] = useState([]);
  const isLogin = useSelector((state) => state.auth.isLogin);

  async function getPortfolio() {
    try {
      const { data } = await getPortafolioServices();
      setPortafolios(data);
    } catch (e) {
      alert("No se pudo obtener los datos");
    }
  }

  async function deletePortafolio(id) {
    try {
      await deletePortafolioServices(id);
      alert("Se elimino correctamente");
      await getPortfolio();
    } catch (e) {
      alert("No se pudo eliminar el elemento, intentalo mas tarde");
    }
  }

  useEffect(() => {
    (async () => {
      await getPortfolio();
    })();
  }, []);

  return (
    <div className="page-portafolio">
      <h1>PORTAFOLIO</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {portafolios.map((portafolio) => (
          <Card
            key={portafolio.id}
            image={portafolio.image}
            title={portafolio.title}
            description={portafolio.description}
            id={portafolio.id}
            onDelete={(id) => {
              window.confirm("Estas seguro que deseas eliminar") &&
                deletePortafolio(id);
              console.log("eliminar!!!", id);
            }}
            isLogin={isLogin}
          />
        ))}
      </div>
    </div>
  );
}
