import React from "react";

const validationsRegistration = React.createContext({ // context default
  cpf: noValidation,
  password: noValidation,
});

function noValidation(data) {
    console.log(data)
    return {isValid: true, text:""}
}
export default validationsRegistration;
