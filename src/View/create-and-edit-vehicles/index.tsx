import { z } from "zod";
import { Container, LeftSide, RightSide, Title, WhiteBox } from "./styles"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { formatCEP } from "../../utils/regex";
import { useGetCep } from "../../hooks/useGetCep";

const schema = z.object({
  email: z.string()
    .email("Email inválido"),
  password: z.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  cep: z.string()
    .max(9, "O CEP deve ter no máximo 9 caracteres"),

});

type FormData = z.infer<typeof schema>;


export function CreateAndEditVehicles() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    // console.log("🚀 ~ CreateAndEditVehicles ~ data:", data)
  });
  // relacionado ao cep

  const { data } = useGetCep((watch('cep')));
  console.log("🚀 ~ CreateAndEditVehicles ~ data:", data)

  return (
    <Container>
      <LeftSide onSubmit={onSubmit}>
        <Title>Localização do Veículo</Title>
        <WhiteBox>
          <TextField
            {...register("cep", { required: true })}
            label="CEP"
            type="text"
            onChange={(e) => {
              const formattedValue = formatCEP(e.target.value);
              setValue('cep', formattedValue);
            }}
            required
            sx={{ maxWidth: '200px' }}
            placeholder="00000-000"
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