import { CustomHeader, ItemsArea, LinksArea } from "./styles";
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { Box, MenuItem } from "@mui/material";
import { CustomMenu } from "../CustomMenu";

export function Header() {
  return (
    <CustomHeader>
      <ItemsArea>
        <Box>
          <Link to="/vehicles"><img src={Logo} alt="logo" /></Link>
        </Box>
        <LinksArea>
          <Box>
            <CustomMenu title="Veículos">
              <MenuItem> <Link to="/vehicles">Dashboard</Link></MenuItem>
              <MenuItem> <Link to="/vehicles">Clientes</Link></MenuItem>
              <MenuItem> <Link to="/vehicles">Conta</Link></MenuItem>
            </CustomMenu>
          </Box>
          <Link to="#">Clientes</Link>
          <Link to="#">Conta</Link>
        </LinksArea>
      </ItemsArea>
    </CustomHeader>
  );
}