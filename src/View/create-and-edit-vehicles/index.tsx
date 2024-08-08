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
import { IBrand } from "../../interface/brand";
import { IVersion } from "../../interface/version";
import { IModels } from "../../interface/models";
import { ICategory } from "../../interface/category";

const schema = z.object({
  city: z.string(),
  state: z.string(),
  cep: z.string()
    .max(9, "O CEP deve ter no máximo 9 caracteres"),
  category: z.number(),
  model: z.number(),
  brand: z.number(),
  version: z.number(),
  year: z.number(),
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
  const { data: cepData } = useGetCep(watch('cep'));
  const { data: brandData } = useGetBrand(watch('category'))
  const { data: modelData } = useGetModels(watch('brand'))
  const { data: versionData } = useGetVerions(watch('model'))
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
            getOptionLabel={(option: ICategory) => option.label}
            onChange={(_, option) => {
              setValue('category', option!.value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Categoria"
                required={true}
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
            getOptionLabel={(option: IBrand) => option.label}
            disabled={!brandData}
            onChange={(_, option) => {
              setValue('brand', option!.value);
            }}
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
          <FlexComponent>

            <Autocomplete
              {...register("model", { required: true })}
              options={modelData}
              getOptionLabel={(option: IModels) => option.label}
              disabled={!modelData}
              onChange={(_, option) => {
                setValue('model', option!.value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Modelo"
                  required
                  fullWidth
                  sx={{ width: '450px' }}
                  placeholder="Modelo"
                // error={!!errors.model}
                // helperText={errors.model?.message}
                />
              )}
            />

            <TextField
              {...register("year", { required: true })}
              label="Ano do modelo"
              required
              sx={{ maxWidth: '200px' }}
              placeholder="Ano"
              type='year'
            />

          </FlexComponent>

          <Autocomplete
            {...register("version", { required: true })}
            options={versionData}
            getOptionLabel={(option: IVersion) => option.label}
            disabled={!versionData}
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