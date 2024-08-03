import { useState, useEffect } from "react";
import { CustomHeader, CustomLink, ItemsArea, LinksArea } from "./styles";
import Logo from '../../assets/logo.png'
import { Box, Divider, Link, MenuItem } from "@mui/material";
import { CustomMenu } from "../CustomMenu";
import { BookImage, CarFront, Link2, LogOut, MessageCircle, Phone, Rocket, Settings2, Users } from "lucide-react";
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
            <Link href="/vehicles"><img src={Logo} alt="logo" /></Link>
          </Box>
          <LinksArea>
            <Link href="#"><CarFront /> Veículos</Link>
            <Link href="#"><Users /> Proprietários</Link>

            <CustomMenu title="Site">
              <MenuItem><CustomLink href="/vehicles"><Phone /> Unidades e Telefone</CustomLink></MenuItem>
              <MenuItem><CustomLink href="/vehicles"><BookImage /> Minha Logo</CustomLink></MenuItem>
              <MenuItem><CustomLink href="/vehicles"><Link2 /> Domínio</CustomLink></MenuItem>
              <Divider />
              <MenuItem><CustomLink href="/vehicles"><Rocket /> Otimização para o google</CustomLink></MenuItem>
              <MenuItem><CustomLink href="/vehicles"><Settings2 /> Configurações</CustomLink></MenuItem>
            </CustomMenu>

            <CustomMenu title="Financeiro">
              <MenuItem><CustomLink href="/vehicles"><Phone /> Meu Plano</CustomLink></MenuItem>
              <MenuItem><CustomLink href="/vehicles"><BookImage /> Minhas Transações</CustomLink></MenuItem>
            </CustomMenu>

            <Link href="#"><MessageCircle /> Ajuda</Link>
            <Link href="#"><LogOut /> Sair</Link>
          </LinksArea>
        </ItemsArea>
      </CustomHeader>
    ) : (
      <AppBarComponent />
    )
  );
}
