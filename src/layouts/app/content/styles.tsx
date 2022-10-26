import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  gridArea: "content",
  width: "100%",
  display: "block",
  height: "100%",
  backgroundColor: theme.palette["background-dark"].main,
  // padding: "15px 20px;",
  overflowX: "hidden",
  overflowY: "hidden",
  position: "relative",
  // marginTop: 70,
  // paddingLeft: theme.spacing(1),
  // paddingRight: theme.spacing(1),
}));
