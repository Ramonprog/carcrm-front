import { useState, useEffect } from "react";
import { CustomHeader, ItemsArea, LinksArea } from "./styles";
import Logo from '../../assets/logo.png'
import { Box, Divider, Link, MenuItem } from "@mui/material";
import { CustomMenu } from "../CustomMenu";
import { AppBarComponent } from "../AppBar";

export function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Adiciona o event listener
    window.addEventListener('resize', handleResize);

    // Remove o event listener quando o componente é desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    windowWidth > 960 ? (
      <CustomHeader>
        <ItemsArea>
          <Box>
            <Link href="#"><img src={Logo} alt="logo" /></Link>
          </Box>
          <LinksArea>
            <Link href="#">Veículos</Link>
            <Link href="#" >Proprietários</Link>

            <CustomMenu title="Site">
              <MenuItem>Minha Logo</MenuItem>
              <MenuItem> Domínio</MenuItem>
              <Divider />
              <MenuItem> Otimização para o google</MenuItem>
              <MenuItem> Configurações</MenuItem>
            </CustomMenu>

            <CustomMenu title="Financeiro">
              <MenuItem>Meu Plano</MenuItem>
              <MenuItem> Minhas Transações</MenuItem>
            </CustomMenu>

            <Link href="#">Ajuda</Link>
            <Link href="#">Sair</Link>
          </LinksArea>
        </ItemsArea>
      </CustomHeader>
    ) : (
      <AppBarComponent />
    )
  );
}
