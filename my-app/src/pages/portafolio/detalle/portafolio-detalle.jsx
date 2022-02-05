import {
    useParams, useHistory
} from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "../../../components/card/card";

export function PagePortafolioDetalle() {
    const params = useParams();
    const history = useHistory();

    const [portafolio, setPortafolio] = useState({})

    function getDetailPortafolio(id) {
        axios.get(`https://61ef3d0cd593d20017dbb393.mockapi.io/portafolio/${id}`)
        .then((portafolio) => {
            setPortafolio(portafolio.data)
        }).catch((err) => {
            alert("no se pudo hacer la consulta")
        })
    }

    useEffect(() => {
        console.log("cuando inicializa el compnente!!!", params.id)
        getDetailPortafolio(params.id)
    }, [])

    return <div className="py-10">
        <button className="bg-green-300 text-white py-6 px-10 rounded-2xl mb-10" onClick={() => {
            history.push("/portafolio")
        }}>Volver</button>
        
        <Card image={portafolio.image}
            title={portafolio.title}
            description={portafolio.description}
            id={portafolio.id}/>
    </div>
}