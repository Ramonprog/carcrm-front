import { Container, LoginArea } from "./styles";
import { useForm } from "react-hook-form"
import Logo from '../../assets/logo.png'
import { Button, TextField } from "@mui/material";

type FormData = {
  email: string
  password: string
}


export function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  });

  return (
    <Container>
      <LoginArea>
        <img src={Logo} alt="logo" />
        <form onSubmit={onSubmit}>
          <TextField
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            })}
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            {...register("password", {
              required: "A senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            })}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button type="submit">Enviar</Button>
        </form>
      </LoginArea>

    </Container>
  )
}