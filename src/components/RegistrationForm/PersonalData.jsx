import React, { useState, useContext } from "react";
import { Button, Switch, TextField, FormControlLabel } from "@material-ui/core";
import validationsRegistration from "../../../src/contexts/validations"
import useError from "../../hooks/useError";

function PersonalData({ onSubmit }) {
  const [name, setName] = useState(""); // guarda informações de um componente, usar um estado e ele ser gerenciado pelo react internamente
  const [lastName, setLastName] = useState("")
  const [cpf, setCPF] = useState("");
  const [promotions, setPromotions] = useState(true)
  const [news, setNews] = useState(true)
  const validations = useContext(validationsRegistration)
  const [errors, validateInput, canSend] = useError(validations)

  

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (canSend()) {
          onSubmit({ name, lastName, cpf, promotions, news })
        }
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value) // Atribuindo ao estado o valor do input
        }}
        id="name"
        label="Nome"
        required
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />
      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value) // pega o evento de onchange e atribui ao estado de lastName
        }}
        id="last-name"
        label="Sobrenome"
        required
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCPF(event.target.value)
        }}
        onBlur={validateInput}
        helperText={errors.cpf.textCPF}
        error={errors.cpf.isValid}
        id="cpf"
        name="cpf"
        label="CPF"
        required
        variant="outlined"
        fullWidth={true}
        margin="normal"
        type="number"
      />

      <FormControlLabel
        control={
          <Switch
            checked={promotions}
            onChange={(event) => {
              setPromotions(event.target.checked)
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
              setNews(event.target.checked)
            }}
            name="Novidades"
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default PersonalData;
