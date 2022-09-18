import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  flexDirection: "column",
  overflowY: "hidden",
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

export const Blaze = styled("div")(({ theme }) => ({
  display: "block",
  overflow: "hidden!important",
  width: "100%",
  height: "620px",
  touchAction: "none",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  // overscrollBehavior: "contain",
  // backgroundColor: theme.palette["red"].main,
  position: "relative",
}));

export const Iframe = styled("iframe")(({ theme }) => ({
  display: "block",
  overflow: "hidden!important",
  width: "100%",
  height: "690px",
  marginBottom: "-80px",
  touchAction: "none",
  position: "relative",
  top: 0,

  "&:after": {
    content: "''",
    width: "100%",
    height: "690px",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 999,
    backgroundColor: theme.palette["blue"].main,
  },
}));
