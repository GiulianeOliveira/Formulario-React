import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DeliveryData({ onSubmit }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ cep, endereco, numero, complemento, cidade, estado });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        required
        type="number"
        variant="outlined"
        margin="normal"
        value={cep}
        onChange={(event) => setCep(event.target.value)}
      />

      <TextField
        id="endereco"
        label="Endereço"
        required
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth={true}
        value={endereco}
        onChange={(event) => setEndereco(event.target.value)}
      />

      <TextField
        id="numero"
        label="Numero"
        required
        type="number"
        variant="outlined"
        margin="normal"
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
      />

      <TextField
        id="complemento"
        label="Complemento"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth={true}
        value={complemento}
        onChange={(event) => setComplemento(event.target.value)}
      />

      <TextField
        id="cidade"
        label="Cidade"
        required
        type="text"
        variant="outlined"
        margin="normal"
        value={cidade}
        onChange={(event) => setCidade(event.target.value)}
      />

      <TextField
        id="estado"
        label="Estado"
        required
        type="text"
        variant="outlined"
        margin="normal"
        value={estado}
        onChange={(event) => setEstado(event.target.value)}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth={true}
      >
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DeliveryData;
