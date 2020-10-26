import React, {useState} from "react";

const useError = (validations) => {
  const initialState = createInitialState(validations)
  const [errors, setErrors] = useState(initialState)

  const validateInput = (event) => {
    const { name, value } = event.target // desestruturação
    const values = validations[name](value) // validations[key](value)
    const newState = { ...errors }
    newState[name] = values
    setErrors(newState)
  }

  const canSend = () => {
    for (let input in errors) {
      if (errors[input].isValid) {
        return false;
      }
    }
    return true;
  }

  return [errors, validateInput, canSend];
}

const createInitialState = (validations) => {
  const initialState = {}
  for(let input in validations) {
    initialState[input] = { isValid: false, textCPF: "" }
  }
  return initialState;
}

export default useError;