import Text, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const TextField = styled((props: TextFieldProps) => (
  <Text
    variant="filled"
    style={{ marginTop: 11 }}
    InputProps={{ disableUnderline: true }}
    color="white"
    fullWidth
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "none",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette["dark-background"],
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: theme.palette["dark-background"],
    },
    "&.Mui-focused": {
      backgroundColor: theme.palette["dark-background"],
      //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      border: "none",
    },
  },
}));
