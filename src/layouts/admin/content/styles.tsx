import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  gridArea: "content",
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette["background-dark"].main,
  overflowX: "hidden",
  overflowY: "hidden",
  position: "relative",

  //  padding: 15px 20px;
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));
