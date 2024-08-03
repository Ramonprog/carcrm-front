import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export function DashboardLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}