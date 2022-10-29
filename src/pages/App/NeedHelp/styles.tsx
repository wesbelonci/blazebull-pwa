import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  padding: theme.spacing(1),
  justifyContent: "start",
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
  // padding: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  maxWidth: "428px",
  width: "100%",
  height: window.innerHeight,
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  paddingBottom: 40,
}));

export const PageTitle = styled("div")(({ theme }) => ({
  display: "flex",
  // maxWidth: "100%",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: 80,
  flexDirection: "row",
  overflow: "hidden",
  position: "relative",
  flexWrap: "wrap",

  svg: {
    color: theme.palette["red"].main,
  },

  paddingBottom: 20,

  borderBottom: 1,
  borderStyle: "solid",
  borderColor: theme.palette["separator"].main,
}));

export const Title = styled("h2")(({ theme }) => ({
  color: theme.palette["red"].main,
  fontSize: 20,
  fontWeight: 700,
}));

export const HelpText = styled("span")(({ theme }) => ({
  color: theme.palette["white"].main,
  fontSize: 12,
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  // backgroundColor: theme.palette["background-dark"].main,
  padding: theme.spacing(1),
  // maxWidth: "100%",
  maxWidth: "428px",
  width: "100%",
  height: 50,
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",

  // paddingBottom: 20,

  svg: {
    color: theme.palette["white"].main,
  },
}));

interface ButtonProps {
  variant?: "contained" | "outlined";
}

export const Button = styled("button")<ButtonProps>(({ theme, variant }) => ({
  display: "flex",
  width: "100%",
  height: "60px",
  position: "relative",
  flexDirection: "row",
  bottom: 0,
  left: 0,
  cursor: "pointer",
  borderRadius: "0.563rem",
  outline: "none",

  backgroundColor:
    variant === "contained" ? theme.palette.red.main : "transparent",

  border:
    variant === "contained" ? "none" : `1px solid ${theme.palette["red"].main}`,

  color:
    variant === "contained"
      ? theme.palette["white"].main
      : theme.palette["red"].main,

  svg: {
    marginRight: 5,
  },

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
