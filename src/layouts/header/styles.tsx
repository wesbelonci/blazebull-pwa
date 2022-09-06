import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  gridArea: "header",
  display: "flex",
  width: "100%",
  height: "70px",
  justifyContent: "space-between",
  backgroundColor: theme.palette["background-dark"].main,
  alignItems: "center",
}));
