import React, { useEffect, useState } from 'react';
import './App.css';
import Cabecera from './components/cabecera/cabecera';
import Carta from './components/carta/carta';

function App() {
  const [data, setData] = useState([])

  useEffect(async ()=>{
    const respuesta = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=01/01/2000&enddate=08/23/2002&dateregion=tcg_date");
    const misDatos = await respuesta.json()
    setData(misDatos.data)
  },[])

  return (
    <div className="yugioh">             
      {data.map((carta) => <Carta tipo={carta.type} descripcion={carta.desc} name={carta.name} img={carta.card_images[0].image_url_small}/>)}
    </div>
  );
}

export default App;
