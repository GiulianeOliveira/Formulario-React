import React, { useState, useContext } from "react"
import { TextField, Button } from "@material-ui/core"
import validationsRegistration from "../../../src/contexts/validations"
import useError from "../../hooks/useError"

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const validations = useContext(validationsRegistration)
  const [errors, validateInput, canSend] = useError(validations)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (canSend()) {
          onSubmit({ password, email })
        }
      }}
    >
      <TextField
        id="email"
        label="Email"
        name="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth={true}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="password"
        label="Senha"
        type="password"
        name="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth={true}
        value={password}
        onBlur={validateInput}
        onChange={(event) => setPassword(event.target.value)}
        helperText={errors.password.text}
        error={errors.password.isValid}
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default UserData;
