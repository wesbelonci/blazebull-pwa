import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  alignItems: "center",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  overflow: "hidden",
  overflowY: "hidden",
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  paddingLeft: theme.spacing(1.8),
  paddingRight: theme.spacing(1.8),
  //maxWidth: "390px",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  overflowX: "hidden",
  overflowY: "hidden",
  // resize: "vertical",
  paddingBottom: 50,
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
    variant === "contained" ? theme.palette["telegram"].main : "transparent",

  border:
    variant === "contained"
      ? "none"
      : `1px solid ${theme.palette["whatsapp"].main}`,

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
