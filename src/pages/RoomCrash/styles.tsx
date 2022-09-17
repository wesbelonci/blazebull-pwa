import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  // backgroundColor: theme.palette["background-dark"].main,
  alignItems: "center",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  //height: window.innerHeight,
  flexDirection: "column",
  overflowY: "hidden",
  //overflow: "auto",
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  paddingLeft: theme.spacing(0.8),
  paddingRight: theme.spacing(0.8),
  // backgroundColor: theme.palette["white"].main,
  width: "100%",
  height: "100%",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "flex-start",
  position: "relative",
  overflowX: "hidden",
  overflowY: "hidden",
  //overflow: "auto",
}));

export const Blaze = styled("iframe")(({ theme }) => ({
  display: "block",
  overflow: "hidden",
  // overflowX: "hidden",
  // overflowY: "hidden",
  width: "100%",
  height: "690px",
  marginBottom: "-80px",
  resize: "none",
  border: "none",
}));
