import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "block",
  backgroundColor: theme.palette["background-dark"].main,
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));
