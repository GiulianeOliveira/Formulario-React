import React, { Component } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>

      <RegistrationForm onSubmit={onSubmitForm} validateCPF={validateCPF} />
    </Container>
  );
}

const onSubmitForm = (data) => console.log(data); // Utilizei console.log apenas para simplificar o projeto
const validateCPF = (cpf) => {
  if (cpf.length !== 11) {
    return { isValid: true, textCPF: "CPF deve conter 11 números." };
  } else return { isValid: false, textCPF: "" };
};

export default App;
