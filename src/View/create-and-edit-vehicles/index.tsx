import { z } from "zod";
import { Container, FlexComponent, LeftSide, RightSide, Title, WhiteBox } from "./styles"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { formatCEP } from "../../utils/regex";
import { useGetCep } from "../../hooks/useGetCep";

const schema = z.object({
  city: z.string(),
  state: z.string(),
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
    console.log("🚀 ~ CreateAndEditVehicles ~ data:", data)
  });

  // relacionado ao cep
  const { data: cepData } = useGetCep((watch('cep')));

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
            sx={{ maxWidth: '200px' }}
            required
            placeholder="00000-000"
            error={!!errors.cep}
            helperText={errors.cep?.message}
          />
          <FlexComponent>
            <TextField
              {...register("city", { required: true })}
              label="Cidade"
              type="text"
              required
              fullWidth
              placeholder="Cidade"
              value={cepData?.localidade}
              error={!!errors.city}
              helperText={errors.city?.message}
              disabled
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              {...register("state", { required: true })}
              label="Estado"
              type="text"
              required
              sx={{ maxWidth: '200px' }}
              placeholder="Estado"
              value={cepData?.uf}
              error={!!errors.state}
              helperText={errors.state?.message}
              disabled
              InputLabelProps={{ shrink: true }}
            />
          </FlexComponent>
        </WhiteBox>
      </LeftSide>
      <RightSide>
        <p>This is the Create and Edit Vehicles page.</p>
      </RightSide>
    </Container>
  )
}