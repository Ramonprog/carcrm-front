import { Container, LoginArea } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Logo from '../../assets/logo.png';
import { Button, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";
import { logOut, registerTenant } from "../../store/slices/register-slice";
import { useEffect } from "react";

// Defina o esquema Zod para validação
const schema = z.object({
  email: z.string()
    .email("Email inválido"),
  password: z.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  name: z.string()
    .min(3, "A razão social deve ter pelo menos 2 caracteres")

});

type FormData = z.infer<typeof schema>;

export function Register() {
  const { status } = useAppSelector(state => state.register)
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
    dispatch(registerTenant({ email: data.email, password: data.password, name: data.name }));
    if (status === 'succeeded') {
      navigate(-1);
    }
  });

  useEffect(() => {
    if (status === 'succeeded') {
      navigate(-1);
      dispatch(logOut());
    }
  }, [status])

  return (
    <Container>
      <LoginArea>
        <img src={Logo} alt="logo" />
        <h5>Crie sua conta, teste grátis</h5>
        <form onSubmit={onSubmit}>
          <TextField
            {...register("name")}
            label="Razão social"
            type="text"
            required
            error={!!errors.name}
            helperText={errors.name?.message}
          />

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
        <p>Já possui uma conta? <Link to="/">Entre aqui</Link></p>
      </LoginArea>
    </Container>
  );
}
