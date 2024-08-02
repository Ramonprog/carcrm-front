import { styled } from '@mui/material/styles';

export const Container = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));


export const LoginArea = styled('div')(({theme}) =>({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '500px',
  backgroundColor: theme.palette.background.paper,
  padding: '20px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    '& img': {
    width: '300px',
    objectFit: 'contain',
    marginBottom: '20px',
  },

  '& h5': {
    marginBottom: '20px',
  },

  '& form': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '20px',
  },

   '& a': {
    color: '#007FFF',
  },
}));



