import { useGetBrand } from "../../hooks/useGetBrand"

export function CreateAndEditVehicles() {
  const { data: brands } = useGetBrand()
  console.log("🚀 ~ CreateAndEditVehicles ~ data:", brands)
  return (
    <>
      <h1>Create and Edit Vehicles</h1>
    </>
  )
}