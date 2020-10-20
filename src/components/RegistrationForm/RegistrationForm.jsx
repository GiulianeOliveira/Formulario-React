import React, { useState } from "react";
import { Button, Switch, TextField, FormControlLabel } from "@material-ui/core";

function RegistrationForm({ onSubmit, validateCPF }) {
  const [name, setName] = useState(""); // guarda informações de um componente, usar um estado e ele ser gerenciado pelo react internamente
  const [lastName, setLastName] = useState("");
  const [cpf, setCPF] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({
    errorCPF: { isValid: false, textCPF: "" },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ name, lastName, cpf, promotions, news });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value); // Atribuindo ao estado o valor do input
        }}
        id="name"
        label="Nome"
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />
      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value); // pega o evento de onchange e atribui ao estado de lastName
        }}
        id="last-name"
        label="Sobrenome"
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        onBlur={(event) => {
          const values = validateCPF(event.target.value);
          setErrors({ errorCPF: values });
        }}
        helperText={errors.errorCPF.textCPF}
        error={errors.errorCPF.isValid}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />

      <FormControlLabel
        control={
          <Switch
            checked={promotions}
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
            name="Promoções"
            color="primary"
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="Novidades"
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default RegistrationForm;
