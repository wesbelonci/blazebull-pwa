import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  padding: theme.spacing(1),
  justifyContent: "end",
  alignItems: "center",
  width: "100%",
  height: window.innerHeight,
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  padding: theme.spacing(1),
  maxWidth: "428px",
  width: "100%",
  height: "auto",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  paddingBottom: 40,

  "&::before": {
    content: '""',
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 20%,${theme.palette["background-dark"].main}), url(/assets/images/bg-entry.webp)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    position: "fixed",
    maxWidth: "428px",
    width: "100%",
    height: "90vh",
    opacity: 0.8,
    top: 0,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

interface ButtonProps {
  variant?: "contained" | "outlined";
}

export const Button = styled("div")<ButtonProps>(({ theme, variant }) => ({
  display: "flex",
  width: "100%",
  height: "60px",
  position: "relative",
  bottom: 0,
  left: 0,
  cursor: "pointer",
  borderRadius: "0.563rem",

  backgroundColor:
    variant === "contained" ? theme.palette.red.main : "transparent",

  border:
    variant === "contained" ? "none" : `1px solid ${theme.palette["red"].main}`,

  color:
    variant === "contained"
      ? theme.palette["white"].main
      : theme.palette["red"].main,

  // "&:hover": {
  //   backgroundColor: theme.palette["dark-red"].main,
  // },
}));

export const IconButton = styled("div")(({ theme }) => ({
  color: theme.palette.white.main,
  marginLeft: "10px",
}));

export const NeedHelp = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginTop: 30,
  marginBottom: 10,
  height: 30,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  // marginTop: 10,

  position: "relative",
  bottom: 20,
  left: 0,
}));
