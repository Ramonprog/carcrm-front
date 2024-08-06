import { useGetBrand } from "../../hooks/useGetBrand"
import { Container } from "./styles"

export function CreateAndEditVehicles() {
  const { data: brands } = useGetBrand()
  console.log("🚀 ~ CreateAndEditVehicles ~ data:", brands)
  return (
    <Container>
      <h1>Create and Edit Vehicles</h1>
      <p>This is the Create and Edit Vehicles page.</p>
    </Container>
  )
}