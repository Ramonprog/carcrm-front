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
      },
    },
  }
});