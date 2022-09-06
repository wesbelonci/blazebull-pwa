import { styled } from "@mui/system";

// import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
// import SnackbarContent from "@mui/material/SnackbarContent";

export const SnackbarCustom = styled((props: SnackbarProps) => (
  <Snackbar {...props} ContentProps={{ className: "root" }} />
))(({ theme }) => ({
  // background: theme.palette["red"].main,

  div: {
    backgroundColor: "#262f3c",
  },
}));
