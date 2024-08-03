import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#005696",
    },
    secondary: {
      main: "#3479A3",
    },
    background: {
      default: "#eae9e9",
      paper: "#FFFFFF",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        fullWidth: true,
      },
    },
  }
});