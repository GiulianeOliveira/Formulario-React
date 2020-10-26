export const validateCPF = (cpf) => {
    if (cpf.length !== 11) {
      return { isValid: true, textCPF: "CPF deve conter 11 números." };
    }
    return { isValid: false, textCPF: "" };
  };
 
export const validatePassword = (password) => {
  if (password.length < 4) {
    return {isValid: true, text: "A senha deve conter mais de 4 dígitos."}
  }
  return {isValid: false, text: ""}
}