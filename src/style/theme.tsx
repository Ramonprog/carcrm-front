import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
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