import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const validateEmail = (email: string) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };
  const handleSumit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError({
        error: true,
        message: "Formato de correo no válido",
      });
    } else {
      setError({
        error: false,
        message: "",
      });
    }
  };

  return (
    <>
      <h1>Formulario</h1>
      <Box component="form" onSubmit={handleSumit}>
        <TextField
          id="email"
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          helperText={error.message}
          error={error.error}
        />
        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </Box>
    </>
  );
}
