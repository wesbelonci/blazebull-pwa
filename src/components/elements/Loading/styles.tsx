import { styled } from "@mui/system";

export const Container = styled("div")<{ show?: boolean }>(
  ({ theme, show }) => ({
    display: `${show ? "flex" : "none"}`,
    transition: "all 200ms ease-in",
    backgroundColor: theme.palette["background-dark"].main,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "fixed",
    height: window.innerHeight,
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 99999,
    top: 0,
    left: 0,
  })
);

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  maxWidth: "428px",
  width: "100%",
  height: "auto",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  zIndex: 200,

  "&::before": {
    content: '""',
    // backgroundColor: theme.palette["background-dark"].main,
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 10%,${theme.palette["background-dark"].main}), url(/assets/images/bg-pre-loading.webp)`,
    backgroundRepeat: "no-repeat",
    opacity: 0.2,
    backgroundPosition: "50% 50%",
    // backgroundSize: "content",
    backgroundSize: "cover",
    position: "fixed",
    maxWidth: "390px",
    width: "100%",
    // height: "100vh",
    height: window.innerHeight,
    top: -50,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "0 auto",
    zIndex: 200,
    // zIndex: -9,
  },
}));

export const LogoBox = styled("div")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(1),
  maxWidth: "390px",
  // width: "max(80px, 100px)",
  width: "100%",
  // marginTop: "10%",
  marginTop: 20,
  height: "auto",
  flexDirection: "column",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",

  img: {
    width: "max(100px, 120px)",
    height: "auto",
  },
}));

export const LoadingBox = styled("div")(({ theme }) => ({
  display: "flex",
  transition: "all 200ms ease-in",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  width: "100%",
  height: "100px",
}));
