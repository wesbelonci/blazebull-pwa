import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  padding: theme.spacing(1),
  // justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: window.innerHeight,
  flexDirection: "column",
  overflow: "hidden",
  overflowY: "hidden",
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  maxWidth: "390px",
  width: "100%",
  height: "auto",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  overflowX: "hidden",
  overflowY: "hidden",
  // resize: "vertical",

  // "&::before": {
  //   content: '""',
  //   // backgroundColor: theme.palette["background-dark"].main,
  //   backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 10%,${theme.palette["background-dark"].main}), url(/assets/images/bg-login.webp)`,
  //   backgroundRepeat: "no-repeat",
  //   opacity: 0.2,
  //   backgroundPosition: "50% 50%",
  //   // backgroundSize: "content",
  //   backgroundSize: "cover",
  //   position: "fixed",
  //   maxWidth: "390px",
  //   width: "100%",
  //   // height: "100vh",
  //   height: window.innerHeight,
  //   top: -50,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   margin: "0 auto",
  //   // zIndex: -9,
  // },
}));

export const Blaze = styled("iframe")(({ theme }) => ({
  overflow: "hidden",
  width: "100%",
  height: "690px",
  marginBottom: "-80px",
  resize: "none",
  overflowX: "hidden",
  overflowY: "hidden",
}));
