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
  height: "580px",
  touchAction: "none",
  paddingLeft: theme.spacing(1.2),
  paddingRight: theme.spacing(1.2),
  // overscrollBehavior: "contain",
  // backgroundColor: theme.palette["red"].main,
  position: "relative",

  // "&:after": {
  //   content: "''",
  //   width: "10%",
  //   height: "100%",
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   zIndex: 999,
  //   overflowY: "scroll",
  //   // backgroundColor: theme.palette["blue"].main,
  // },

  // "&:before": {
  //   content: "''",
  //   width: "10%",
  //   height: "100%",
  //   position: "absolute",
  //   top: 0,
  //   right: 0,
  //   zIndex: 999,
  //   overflowY: "scroll",
  //   // backgroundColor: theme.palette["blue"].main,
  // },
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
}));
