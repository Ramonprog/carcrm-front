import { z } from "zod";
import { useGetBrand } from "../../hooks/useGetBrand"
import { Container, LeftSide, RightSide, Title, WhiteBox } from "./styles"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, TextField } from "@mui/material";
import { formatCEP } from "../../utils/regex";
const schema = z.object({
  email: z.string()
    .email("Email inválido"),
  password: z.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  cep: z.string()
    .min(3, "A razão social deve ter pelo menos 2 caracteres"),


});

type FormData = z.infer<typeof schema>;


export function CreateAndEditVehicles() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log("🚀 ~ CreateAndEditVehicles ~ data:", data)
  });

  return (
    <Container>
      <LeftSide onSubmit={onSubmit}>
        <Title>Localização do Veículo</Title>
        <WhiteBox>
          <TextField
            {...register("cep", {
              required: true,
              pattern: /^\d{5}-\d{3}$/,
              validate: {
                format: (value) => {
                  const formatted = formatCEP(value);
                  return formatted.length === 9 || "CEP deve ter 9 caracteres no formato XXXXX-XXX";
                },
              },

            })}
            label="Razão social"
            type="text"
            required
            error={!!errors.cep}
            helperText={errors.cep?.message}
          />

        </WhiteBox>
      </LeftSide>
      <RightSide>
        <p>This is the Create and Edit Vehicles page.</p>
      </RightSide>
    </Container>
  )
}