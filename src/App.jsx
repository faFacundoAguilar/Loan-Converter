import React, { useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resultado from './componentes/Resultado';
import Mensaje from './componentes/Mensaje';

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);

  const handleClear = () => {
    setCantidad(0);
    setPlazo("");
    setTotal(0);
  };

  let componente;
  if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado total={total} cantidad={cantidad} plazo={plazo} onClear={handleClear} />;
  }

  return (
    <>
      <Header titulo="Cotizador de Préstamos..." />
      <div className="container mx-auto px-4 -mt-36">
        {/* Ajuste del margen superior del formulario */}
        <Formulario 
          cantidad={cantidad} 
          setCantidad={setCantidad} 
          plazo={plazo} 
          setPlazo={setPlazo} 
          setTotal={setTotal}
        />
      </div>
      {componente}
    </>
  );
}

export default App;
