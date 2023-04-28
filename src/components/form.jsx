import React, { useState } from "react";
import "../styles/styles.css";

const Form = ({ monto, setMonto, envio, setEnvio }) => {
  const [parcial, setParcial] = useState(0);
  const [resul, setResul] = useState(0);
  const [error, guardarError] = useState(false);

  function changeSubmit(e) {
    if (monto < 1 || isNaN(monto) || envio < 1 || isNaN(envio)) {
      guardarError(true);
      return;
    }
    setParcial(monto + envio);
    setResul(parcial * 0.75 + parcial);
    console.log(resul);

    e.preventDefault();
  }

  return (
    <div className="compras">
      {resul >= 0 ? (
        <form onSubmit={changeSubmit}>
          {error ? (
            <error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" />
          ) : null}
          <div className="titulo">
            <h1>Calculador de compras al exterior</h1>
          </div>

          <div className="datos">
            <p>Ingrese monto del producto</p>
            <input
              type="number"
              placeholder="$"
              value={monto}
              min="1"
              step="0.01"
              max="1000"
              onChange={(e) => setMonto(parseFloat(e.target.value, 10))}
            />
            <p>Ingrese costo de envio</p>
            <input
              type="number"
              placeholder="$"
              value={envio}
              min="1"
              step="0.01"
              max="1000"
              onChange={(e) => setEnvio(parseFloat(e.target.value, 10))}
            />
            <div className="boton">
              <button type="submit" name="calcular" value="consultar">
                Calcular
              </button>
            </div>

            <p step="0.01">Precio total: {resul}</p>
          </div>
        </form>
      ) : null}

      <div className="footer">
        <p>Incluidos impuestos a compras al exterior del 75% del total.</p>
      </div>
    </div>
  );
};
export default Form;
