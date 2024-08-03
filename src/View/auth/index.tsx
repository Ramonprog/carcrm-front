import { Container, LoginArea } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Logo from '../../assets/logo.png';
import { Button, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { loginTenant } from "../../store/slices/auth-slice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Defina o esquema Zod para validação
const schema = z.object({
  email: z.string()
    .email("Email inválido"),
  password: z.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")

});

type FormData = z.infer<typeof schema>;

export function Auth() {
  const { status } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(loginTenant({ email: data.email, password: data.password }));
    if (status === 'succeeded') {
      navigate('/vehicles');
    }
  });

  useEffect(() => {
    if (status === 'succeeded') {
      navigate('/vehicles');
    }
  }, [status])

  return (
    <Container>
      <LoginArea>
        <img src={Logo} alt="logo" />
        <form onSubmit={onSubmit}>
          <TextField
            {...register("email")}
            label="Digite seu email"
            type="email"
            required
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            {...register("password")}
            label="Digite sua senha"
            type="password"
            required
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button type="submit">Entrar</Button>
        </form>
        <p>Não possui uma conta? <Link to="/register">Crie aqui</Link></p>

      </LoginArea>
    </Container>
  );
}
