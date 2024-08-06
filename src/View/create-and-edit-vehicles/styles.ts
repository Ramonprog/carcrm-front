import { styled } from "@mui/material";

export const Container = styled('div')(({theme}) => ({
  display: 'flex',
  gap: '20px',
  height: '100vh',
  maxWidth:'1400px',
  backgroundColor: theme.palette.background.default,
}));
