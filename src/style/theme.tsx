import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      paper: "#F8F9FA",

    },
    text: {
      primary: "#3f3f55",
      secondary: "#344054",
    },
    primary: {
      main: "#0E8750",
    },
    secondary: {
      main: "#DA0175",
    },
  },
  typography: {
    htmlFontSize: 9,
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: {
            variant: "outlined",
            fullWidth: true,
          },
          style: {},
        }
      ]
    },
    MuiSelect: {
      variants: [
        {
          props: {
            variant: "outlined",
            fullWidth: true,
          },
          style: {},
        }
      ]
    },
  }
});