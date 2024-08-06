import { Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { BookImage, CarFront, ChartCandlestick, ChevronDown, ChevronUp, DollarSign, HandCoins, Laptop2, Link2, LogOut, MenuIcon, Phone, Rocket, Settings2, Users } from 'lucide-react';
import * as React from 'react';
import { CustomLink, DrawerContainer } from './styles';
import Logo from '../../assets/logo.png';


export function AsideBar() {
  const [open, setOpen] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState({
    site: false,
    financial: false,
  });

  return (
    <>
      <Toolbar title='Menu'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor={'left'}
        open={open} onClose={() => setOpen(false)} >
        <DrawerContainer>
          <List>
            <ListItem>
              <img src={Logo} alt="logo" height={60} />
            </ListItem>
            <ListItem>tenant@gmail.com</ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon><CarFront /></ListItemIcon>
              <ListItemText> <CustomLink href="#"> Veículos</CustomLink></ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon><Users /></ListItemIcon>
              <ListItemText> <CustomLink href="#"> Proprietários</CustomLink></ListItemText>
            </ListItem>

            <ListItem onClick={() => setCollapsed({ ...collapsed, site: !collapsed.site })}>
              <ListItemIcon><Laptop2 /></ListItemIcon>
              <ListItemText> <CustomLink href="#"> Site  {!collapsed.site ? <ChevronDown size={16} /> : <ChevronUp size={16} />}</CustomLink></ListItemText>
            </ListItem>

            <Collapse in={collapsed.site} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemIcon> <Phone /> </ListItemIcon>
                  <CustomLink href="/vehicles">
                    Unidades e Telefone</CustomLink>
                </ListItem>
                <ListItem>
                  <ListItemIcon> <BookImage /> </ListItemIcon>
                  <CustomLink href="/vehicles">
                    Minha Logo</CustomLink>
                </ListItem>
                <ListItem>
                  <ListItemIcon> <Link2 /> </ListItemIcon>
                  <CustomLink href="/vehicles">
                    Domínio</CustomLink>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon> <Rocket /> </ListItemIcon>
                  <CustomLink href="/vehicles">
                    Otimização para o google</CustomLink>
                </ListItem>
                <ListItem>
                  <ListItemIcon> <Settings2 /> </ListItemIcon>
                  <CustomLink href="/vehicles">
                    Configurações</CustomLink>
                </ListItem>
              </List>
            </Collapse>


            <ListItem onClick={() => setCollapsed({ ...collapsed, financial: !collapsed.financial })}>
              <ListItemIcon><HandCoins /></ListItemIcon>
              <ListItemText> <CustomLink href="#"> Financeiro  {!collapsed.financial ? <ChevronDown size={16} /> : <ChevronUp size={16} />}</CustomLink></ListItemText>
            </ListItem>

            <Collapse in={collapsed.financial} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>

                <ListItem>
                  <ListItemIcon><ChartCandlestick /></ListItemIcon>
                  <ListItemText><CustomLink href="/vehicles">Meu Plano</CustomLink></ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon><DollarSign /></ListItemIcon>
                  <ListItemText><CustomLink href="/vehicles">Minhas Transações</CustomLink></ListItemText>
                </ListItem>

              </List>
            </Collapse>

            <ListItem>
              <ListItemIcon><Phone /></ListItemIcon>
              <ListItemText> <CustomLink href="#"> Ajuda</CustomLink></ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon><LogOut /></ListItemIcon>
              <ListItemText> <CustomLink href="#"> Sair</CustomLink></ListItemText>
            </ListItem>
          </List>
        </DrawerContainer>
      </Drawer>
    </>
  )

}