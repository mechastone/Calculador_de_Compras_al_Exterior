import React, { useState } from "react";
import Form from "./components/form";
import "./styles/styles.css";

export default function App() {
  const [monto, setMonto] = useState("");
  const [envio, setEnvio] = useState("");

  return (
    <div className="App">
      <Form
        monto={monto}
        setMonto={setMonto}
        envio={envio}
        setEnvio={setEnvio}
      />
    </div>
  );
}
