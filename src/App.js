import React, { Component } from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validateCPF, validatePassword } from "./utils";
import validationsRegistration from "./contexts/validations";

function App() {
  const onSubmitForm = (data) =>
    console.log("Passou a imprimir os dados no APP\n", data); // Utilizei console.log apenas para simplificar o projeto

  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <validationsRegistration.Provider
        value={{ cpf: validateCPF, password: validatePassword }}
      >
        <RegistrationForm onSubmit={onSubmitForm} />
      </validationsRegistration.Provider>
    </Container>
  );
}

export default App;
