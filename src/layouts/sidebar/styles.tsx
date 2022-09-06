import { styled } from "@mui/system";

export const Container = styled("nav")(({ theme }) => ({
  gridArea: "sidebar",
  display: "flex",
  width: "390px",
  height: "100%",
  backgroundColor: theme.palette["red"].main,
}));
