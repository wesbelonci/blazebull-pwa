import { styled } from "@mui/system";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
// import CropSquareRoundedIcon from "@mui/icons-material/CropSquareRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
// import { red, grey, pink } from "@mui/material/colors";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  padding: theme.spacing(1),
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: window.innerHeight,
  flexDirection: "column",
  overflow: "hidden",
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

  "&::before": {
    content: '""',
    // backgroundColor: theme.palette["background-dark"].main,
    backgroundImage: "url(/assets/images/stroke-logo.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 120%",
    backgroundSize: "content",
    position: "fixed",
    maxWidth: "390px",
    width: "100%",
    height: window.innerHeight,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "0 auto",
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

export const FormBox = styled("form")(({ theme }) => ({
  display: "flex",
  maxWidth: "390px",
  width: "100%",
  marginTop: 30,
  height: 110,
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

export const Divider = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  borderBottom: 2,
  borderStyle: "solid",
  borderColor: theme.palette["white"].main,
}));

// interface InputBoxProps {
//   error?: boolean;
// }

export const InputBox = styled("div")<{ error?: boolean | undefined }>(
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

  "&:hover": {
    backgroundColor: theme.palette["dark-red"].main,
  },
}));

export const IconButton = styled("div")(({ theme }) => ({
  color: theme.palette.white.main,
  marginLeft: "10px",
}));

export const ForgotPassword = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  marginTop: 5,
  color: theme.palette["red"].main,

  textDecoration: "underline",
  textUnderlineOffset: 3,
}));

export const KeepConnected = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 10,
  color: theme.palette["white"].main,

  "&.Mui-checked": {
    color: theme.palette["red"].main,
  },
}));

export const CheckBoxField = styled((props: CheckboxProps) => (
  <Checkbox
    icon={<SquareRoundedIcon />}
    checkedIcon={<CheckBoxOutlineBlankRoundedIcon />}
    sx={{
      color: "#cc2843",
      "&.Mui-checked": {
        color: "#f12c4c",
      },
    }}
  />
))(({ theme }) => ({
  color: theme.palette["red"].main,
  "&.Mui-checked": {
    color: theme.palette["white"].main,
  },
}));

export const NeedHelp = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginTop: 50,
  height: 30,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  // marginTop: 10,

  position: "relative",
  bottom: 20,
  left: 0,
}));
