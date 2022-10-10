import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "block",
  // backgroundColor: theme.palette["white"].main,
  width: "428px",
  height: "100px",
  overflow: "hidden",
  position: "fixed",
  // bottom: 0,
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
  zIndex: 9999,
}));

export const Modal = styled("div")<{ show: boolean }>(({ theme, show }) => ({
  display: show ? "flex" : "none",
  backgroundColor: "rgba(0,0,0, 0.9)",
  position: "fixed",
  maxWidth: "428px",
  width: "100%",
  top: 0,
  left: 0,
  right: 0,
  opacity: show ? 1 : 0,
  margin: "0 auto",
  height: window.innerHeight,
  zIndex: show ? "99" : "-99",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  transition: "all 300ms ease-out",
}));

export const ModalContent = styled("div")<{ show: boolean }>(
  ({ theme, show }) => ({
    display: "flex",
    backgroundColor: theme.palette["background-dark"].main,
    position: "relative",
    width: "100%",
    height: "auto",
    flexDirection: "column",
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 99,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    // transform: show ? "translateY(-100px)" : "translateY(100px)",
    opacity: show ? 1 : 0,

    transition: "all 300ms ease-out",
  })
);

interface ButtonProps {
  variant?: "contained" | "outlined";
}

export const Button = styled("button")<ButtonProps>(({ theme, variant }) => ({
  display: "flex",
  width: "100%",
  height: 60,
  position: "relative",
  bottom: 0,
  // zIndex: 200,
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

  "&:hover": {
    backgroundColor: theme.palette["dark-red"].main,
  },
}));
