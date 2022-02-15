import React, { useEffect, useState } from "react";
import "./App.css";
import Carta from "./components/carta/carta";

const BASE_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=01/01/2000&enddate=08/23/2002&dateregion=tcg_date"


const consultaCarta = async(nombre) => {
  let url = BASE_URL;
  if(nombre){
    url = `${BASE_URL}&fname=${nombre}`
  }

  const respuesta = await fetch(url);
  const misDatos = await respuesta.json();
  return misDatos.data
}

function App() {
  const [data, setData] = useState([]);
  const [buscarCarta, setBuscarCarta] = useState("");

  useEffect(async () => {
    const datos = await consultaCarta();
    setData(datos);
  }, []);

  const buscar = async () => {
    const datos = await consultaCarta(buscarCarta);
    setData(datos);
  };

  return (
    <div className="yugioh">
      <div>
        <input value={buscarCarta} onChange={(event) => setBuscarCarta(event.target.value)}></input>
        <button onClick={buscar}>Buscar</button>
      </div>

      {data &&
        data.map((carta) => (
          <Carta
            tipo={carta.type}
            descripcion={carta.desc}
            name={carta.name}
            img={carta.card_images[0].image_url_small}
          />
        ))}
    </div>
  );
}

export default App;

//onChange={(event) => setBuscarCarta(event.target.value)}
