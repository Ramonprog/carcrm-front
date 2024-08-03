
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Logo from '../../assets/logo.png';
import { AsideBar } from '../AsideBar';
import { AppBarArea } from './styles';


export function AppBarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='secondary' position="static">
        <AppBarArea>
          <AsideBar />
          <img src={Logo} alt="logo" width="100px" />
        </AppBarArea>
      </AppBar>
    </Box>
  );
}