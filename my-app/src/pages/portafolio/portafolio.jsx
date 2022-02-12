import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/card/card";
import "./portafolio.scss";

export function PagePortafolio() {
  const portafolio = [
    {
      image:
        "https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg",
      title: "LEON COLOR",
      description: "Leon colorido de logo",
      url: "",
    },
    {
      image:
        "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",
      title: "Twitter logo",
      description: "Logo de twitter para usa",
      url: "",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5f62b687cae73d2408a06539/1602807735303-4W086W30YX6B3D23N04L/image-asset.png",
      title: "Logo fedex",
      description: "Logo de empresa fedex",
      url: "",
    },
    {
      image:
        "https://www.definicionabc.com/wp-content/uploads/2013/11/Logo.png",
      title: "Starbucks",
      description: "Logo de starbucks",
      url: "",
    },
    {
      image:
        "https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg",
      title: "LEON COLOR",
      description: "Leon colorido de logo",
      url: "",
    },
    {
      image:
        "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",
      title: "Twitter logo",
      description: "Logo de twitter para usa",
      url: "",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5f62b687cae73d2408a06539/1602807735303-4W086W30YX6B3D23N04L/image-asset.png",
      title: "Logo fedex",
      description: "Logo de empresa fedex",
      url: "",
    },
    {
      image:
        "https://www.definicionabc.com/wp-content/uploads/2013/11/Logo.png",
      title: "Starbucks",
      description: "Logo de starbucks",
      url: "",
    },
    {
      image:
        "https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg",
      title: "LEON COLOR",
      description: "Leon colorido de logo",
      url: "",
    },
    {
      image:
        "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",
      title: "Twitter logo",
      description: "Logo de twitter para usa",
      url: "",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5f62b687cae73d2408a06539/1602807735303-4W086W30YX6B3D23N04L/image-asset.png",
      title: "Logo fedex",
      description: "Logo de empresa fedex",
      url: "",
    },
    {
      image:
        "https://www.definicionabc.com/wp-content/uploads/2013/11/Logo.png",
      title: "Starbucks",
      description: "Logo de starbucks",
      url: "",
    },
  ];
  const [portafolios, setPortafolios] = useState([]);
  // const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.auth.isLogin);

  function getPortfolio() {
    axios
      .get("https://61ef3d0cd593d20017dbb393.mockapi.io/portafolio")
      .then((respuesta) => {
        setPortafolios(respuesta.data);
      });
  }

  function deletePortafolio(id) {
    axios
      .delete(`https://61ef3d0cd593d20017dbb393.mockapi.io/portafolio/${id}`)
      .then(() => {
        alert("Se elimino correctamente");
        getPortfolio();
      })
      .catch(() => {
        alert("No se pudo eliminar el elemento, intentalo mas tarde");
      });
  }

  useEffect(() => {
    getPortfolio();
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
