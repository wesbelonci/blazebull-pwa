import { styled } from "@mui/system";

export const Container = styled("nav")(({ theme }) => ({
  gridArea: "sidebar",
  display: "flex",
  width: "390px",
  height: "100%",
  backgroundColor: theme.palette["background-dark"].main,
  position: "fixed",

  transform: "translateX(-390px)",
  transition: "all 200ms ease-in",

  "&.show": {
    transform: "none",
    transition: "all 200ms ease-out",
    zIndex: 100,
  },
}));

export const Header = styled("nav")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "70px",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

export const BackButton = styled("button")(({ theme }) => ({
  display: "flex",
  width: "100px",
  height: "100%",
  justifyContent: "flex-start",
  alignItems: "center",

  svg: {
    color: theme.palette["white"].main,
  },
}));

export const LogOutButton = styled("button")(({ theme }) => ({
  display: "flex",
  width: "100px",
  height: "100%",
  justifyContent: "flex-end",
  alignItems: "center",

  span: {
    color: theme.palette["red"].main,
    marginRight: "8px",
  },

  svg: {
    color: theme.palette["red"].main,
  },
}));
