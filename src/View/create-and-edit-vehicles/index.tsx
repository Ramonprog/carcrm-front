import { z } from "zod";
import { Container, FlexComponent, LeftSide, RightSide, Title, WhiteBox } from "./styles"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Autocomplete, TextField } from "@mui/material";
import { formatCEP } from "../../utils/regex";
import { useGetCep } from "../../hooks/useGetCep";
import { useGetBrand } from "../../hooks/useGetBrand";
import { useGetModels } from "../../hooks/useGetModels";
import { useGetCategories } from "../../hooks/useGetCategories";
import { useGetVerions } from "../../hooks/useGetVersions";

const schema = z.object({
  city: z.string(),
  state: z.string(),
  cep: z.string()
    .max(9, "O CEP deve ter no máximo 9 caracteres"),
  category: z.string(),
  model: z.string(),
  brand: z.string(),
  version: z.string(),
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

  // requisições react-query
  const { data: cepData } = useGetCep((watch('cep')));
  const { data: brandData } = useGetBrand()
  const { data: modelData } = useGetModels()
  const { data: versionData } = useGetVerions()
  const { data: categoryData } = useGetCategories()

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

        <Title>Dados do Veículo</Title>
        <WhiteBox>
          <Autocomplete
            {...register("category", { required: true })}
            options={categoryData}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Categoria"
                required
                fullWidth
                placeholder="Categoria"
              // error={!!errors.category}
              // helperText={errors.category?.message}
              />
            )}
          />

          <Autocomplete
            {...register("brand", { required: true })}
            options={brandData}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Marca"
                required
                fullWidth
                placeholder="Marca"
              // error={!!errors.brand}
              // helperText={errors.brand?.message}
              />
            )}
          />

          <Autocomplete
            {...register("model", { required: true })}
            options={modelData}
            getOptionLabel={(option) => option.model}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Modelo"
                required
                fullWidth
                placeholder="Modelo"
              // error={!!errors.model}
              // helperText={errors.model?.message}
              />
            )}
          />

          <Autocomplete
            {...register("version", { required: true })}
            options={versionData}
            getOptionLabel={(option) => option.version}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Versão"
                required
                fullWidth
                placeholder="Versão"
              // error={!!errors.version}
              // helperText={errors.version?.message}
              />
            )}
          />
        </WhiteBox>
      </LeftSide>
      <RightSide>
        <p>This is the Create and Edit Vehicles page.</p>
      </RightSide>
    </Container>
  )
}