import { CustomHeader, ItemsArea, LinksArea } from "./styles";
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export function Header() {
  return (
    <CustomHeader>
      <ItemsArea>
        <Box>
          <Link to="/vehicles"><img src={Logo} alt="logo" /></Link>
        </Box>
        <LinksArea>
          <Link to="/">Veículos</Link>
          <Link to="#">Clientes</Link>
          <Link to="#">Conta</Link>
        </LinksArea>
      </ItemsArea>
    </CustomHeader>
  );
}