import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  alignItems: "center",
  width: "100%",
  // height: window.innerHeight,
  flexDirection: "column",
  overflow: "hidden",
  overflowY: "auto",
  position: "relative",
  marginBottom: 40,
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  paddingLeft: theme.spacing(1.8),
  paddingRight: theme.spacing(1.8),
  width: "100%",
  height: "auto",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  overflowX: "hidden",
  overflowY: "hidden",
}));

export const BankInfo = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "rgba(255,255, 255, 0.1)",
  borderRadius: 8,
  paddingBottom: 8,
  // paddingLeft: theme.spacing(2),
  // paddingRight: theme.spacing(2),
  paddingTop: 8,
  width: "100%",
  height: "auto",
  justifyContent: "center",
  flexDirection: "row",
  overflow: "hidden",
  position: "relative",
  overflowX: "hidden",
  overflowY: "hidden",
}));

export const BankInfoText = styled("span")(({ theme }) => ({
  color: "#007AFF",
  fontWeight: 700,
}));

export const BankInfoValue = styled("span")(({ theme }) => ({
  color: theme.palette["white"].main,
  fontWeight: 500,
}));

export const BankEditButton = styled("button")(({ theme }) => ({
  color: theme.palette["white"].main,
  outline: "none",
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
    transform: show ? "translateY(-100px)" : "translateY(100px)",
    opacity: show ? 1 : 0,

    transition: "all 300ms ease-out",
  })
);

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "auto",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.563rem",
  border: 2,
  borderStyle: "solid",
  borderColor: theme.palette["white"].main,
}));

export const InputContainer = styled("div")<{ error?: boolean | undefined }>(
  ({ theme, error }) => ({
    display: "flex",
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    width: "100%",
    backgroundColor: theme.palette["background-dark"].main,
    height: 55,
    flexDirection: "row",
    alignItems: "center",

    svg: {
      color: theme.palette["white"].main,
      marginRight: "0.8rem",
    },

    input: {
      backgroundColor: "transparent!important",
      width: "100%",
      height: "100%",
      color: theme.palette["white"].main,

      "&:focus": {
        outline: 0,
        boxShadow: "none",
        // color: theme.palette["white"].main,
      },

      "&::placeholder": {
        color: theme.palette["white"].main,
      },
    },
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

export const IconButton = styled("div")(({ theme }) => ({
  color: theme.palette.white.main,
  marginLeft: "10px",
}));

export const ManagerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "rgba(255,255, 255, 0.1)",
  borderRadius: 8,
  // paddingBottom: 8,
  // paddingLeft: theme.spacing(2),
  // paddingRight: theme.spacing(2),
  // paddingTop: 8,
  width: "100%",
  height: "auto",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  overflowX: "hidden",
  overflowY: "hidden",
}));
