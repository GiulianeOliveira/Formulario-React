import React, { useState, useEffect } from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import DeliveryData from "./DeliveryData";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";

function RegistrationForm({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setCollectedData] = useState({});

  const collectData = (data) => {
    setCollectedData({ ...collectedData, ...data });
    nextStep();
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    // sempre que um estado for atualizado, removido ou adicionado, o useEffect é responsável por gerenciar isso a cada vez que o componente for executado
    if (currentStep === form.length - 1) {
      onSubmit(collectedData);
    }
  }); // quando algo acontece com teus componentes, useEffect é chamado

  const form = [
    <UserData onSubmit={collectData} />,
    <PersonalData onSubmit={collectData} />,
    <DeliveryData onSubmit={collectData} />,
    <Typography variant="h5">Cadastro efetuado com sucesso!</Typography>,
  ];

  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Dados pessoais</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {form[currentStep]}
    </>
  );
}
export default RegistrationForm;
