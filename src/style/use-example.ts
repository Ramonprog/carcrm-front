import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor:theme.palette.primary.main
}));