import { styled } from '@mui/material/styles';

export const CustomHeader = styled('header')(({theme}) => ({
 backgroundColor: theme.palette.background.paper,
  height: '5rem',
  width: '100%',
  padding: '0 1rem',
  borderBottom: '1px solid #eae9e9',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
}));

export const ItemsArea = styled('header')(({
  maxWidth: '87.5rem',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  height: '100%',
  alignItems: 'center',
  '& img': {
    width: '150px',
    objectFit: 'contain',
    cursor: 'pointer',
  },
}));

export const LinksArea = styled('div')(({theme}) => ({  
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',  
  gap: '40px',

  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '1.2rem',
    padding: '24px 0', 

    position: 'relative',
    display: 'inline-block', 
    transition: 'color 0.2s',
    alignItems: 'center',

    '&:hover': {
      color: theme.palette.primary.dark,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      left: '0',
      bottom: '0',
      width: '100%',
      height: '2px',
      backgroundColor: theme.palette.primary.main,
      transform: 'scaleX(0)',
      transformOrigin: 'bottom right',
      transition: 'transform 0.3s ease', 
    },

    '&:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  },
}));

