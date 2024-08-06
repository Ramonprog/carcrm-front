import { Box, Link, styled } from "@mui/material";

export const CustomLink = styled(Link)(({
 textDecoration: 'none',
  color: 'inherit'
}));

export const DrawerContainer = styled(Box)(({
    width: '320px',
    maxWidth: '80vw',
}));