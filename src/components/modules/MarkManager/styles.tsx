import { styled } from "@mui/system";
import Switch from "@mui/material/Switch";

export const Container = styled("div")<{ show: boolean }>(
  ({ theme, show }) => ({
    display: show ? "flex" : "none",
    // backgroundColor: theme.palette["white"].main,
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    position: "fixed",
    // bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    margin: "0 auto",
    zIndex: 999,
  })
);

export const Modal = styled("div")<{ show: boolean }>(({ theme, show }) => ({
  display: show ? "flex" : "none",
  backgroundColor: "rgba(0,0,0, 0.9)",
  position: "relative",
  maxWidth: "428px",
  top: 0,
  left: 0,
  right: 0,
  opacity: show ? 1 : 0,
  margin: "0 auto",
  height: "100vh",
  zIndex: show ? "9999" : "-99",
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

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "auto",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  // borderRadius: "0.563rem",
  // border: 2,
  // borderStyle: "solid",
  // borderColor: theme.palette["white"].main,
}));

export const InputContainer = styled("div")<{
  error?: boolean | undefined;
  active: boolean;
}>(({ theme, error, active }) => ({
  display: "flex",
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  width: "100%",
  backgroundColor: theme.palette["background-dark"].main,
  height: 37,
  flexDirection: "row",
  alignItems: "center",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: theme.palette["separator"].main,
  borderRadius: "0.563rem",
  justifyContent: "center",
  // zIndex: -99,
  visibility: active ? "visible" : "hidden",

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
      color: theme.palette["separator"].main,
    },
  },
}));

export const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: theme.palette["lime-green"].main,
    "&:hover": {
      backgroundColor: theme.palette["background"].main,
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: theme.palette["separator"].main,
  },
}));

export const GameActive = styled("div")<{ active: boolean }>(
  ({ theme, active }) => ({
    display: "flex",
    width: "auto",
    borderRadius: "0.563rem",
    padding: 2,
    zIndex: 100,
    // backgroundColor: theme.palette["separator"].main,
    cursor: "pointer",

    img: {
      filter: !active ? "grayscale(80%)" : "grayscale(0%)",
      opacity: !active ? 0.4 : 1,
    },
    // borderRadius: "0.563rem",
    // border: 2,
    // borderStyle: "solid",
    // borderColor: theme.palette["white"].main,
  })
);
