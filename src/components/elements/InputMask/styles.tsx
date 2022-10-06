// import React from "react-hook-form";
import { styled } from "@mui/system";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export const CustomTextField = styled((props: TextFieldProps) => (
  <TextField
    variant="standard"
    focused
    // style={{ marginTop: 11 }}
    color="separator"
    fullWidth
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "none",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      border: "none",
    },
  },
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
