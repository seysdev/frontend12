import { useState, useEffect } from "react";

function Hombre() {
    return <div>Hola hombre</div>
}

function Mujer() {
    return <div>Hola mujer</div>
}

function MasInfo() {
    return <div>MAS INFO</div>
}


export function PageConceptos() {
    const dataAmigos = [{
        name:'joaquin',
        sexo:'masculino'
    }, {
        name:'maria',
        sexo:'femenino'
    },
    {
        name:'luis',
        sexo:'masculino'
    },
    {
        name:'rosa',
        sexo:'femenino'
    }]
    
    const [sexo, setSexo] = useState("femenino")
    const [amigos, setAmigos] = useState([])
    
    function selectSex() {
       return window.prompt("cual es tu sexo")
    }

    useEffect(() => {
        console.log("primeravez!!!")
        setSexo(selectSex())
    }, [])

    useEffect(() => {
        console.log("sexo", sexo)
        setAmigos(dataAmigos.filter((amigo) => amigo.sexo === sexo))
    }, [sexo])

    return <div>
        {sexo ==="masculino" ? <Hombre/>
        : <Mujer/>}
        <button className="bg-red-300 mt-10 p-6 rounded" onClick={() => {
           setSexo(selectSex())
        }}>SELECCIONA EL SEXO DENUEVO</button>
        <br /><br />
        <h2>AMIGOS POR SEXO</h2>
        <ul>{amigos.map((amigo, id) => <li key={id}>{amigo.name}</li>)}</ul>
        {sexo ==="masculino" ? <MasInfo/> : 'NO HAY MAS INFO'}
    </div>
}