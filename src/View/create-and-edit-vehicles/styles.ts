import { styled } from "@mui/material";

export const Container = styled('div')(({theme}) => ({
  display: 'flex',
  gap: '220px',
  height: '100%',
  maxWidth:'87.5rem',
  margin: '0 auto',
  marginTop: '3rem',
}));


export const LeftSide = styled('form')(({theme}) => ({
  flex: 1,
}));

export const RightSide = styled('div')(({theme}) => ({
  width: '400px',
  opacity:0
}));

export const WhiteBox = styled('div')(({theme}) => ({
  background:'white',
  padding: '1rem',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

export const Title = styled('h4')(({theme}) => ({
  fontSize: '1.5rem',
  margin: '0.5rem 0',
  fontWeight: 'normal',
}));

export const FlexComponent = styled('div')(({theme}) => ({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'space-between',
}));