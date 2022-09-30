import { styled } from "@mui/system";

export const Container = styled("nav")(({ theme }) => ({
  gridArea: "sidebar",
  display: "flex",
  width: "100%",
  maxWidth: 428,
  height: "100%",
  backgroundColor: theme.palette["background-dark"].main,
  position: "fixed",
  flexDirection: "column",

  transform: "translateX(-100%)",
  transition: "all 200ms ease-in",
  opacity: 0,

  "&.show": {
    transform: "none",
    transition: "all 200ms ease-out",
    zIndex: 999,
    opacity: 1,
  },
}));

export const Header = styled("nav")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "70px",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
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

export const UserInfo = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "auto",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const Avatar = styled("div")(({ theme }) => ({
  display: "flex",
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  padding: "3px",
  backgroundColor: theme.palette["red"].main,
  marginTop: 20,
  position: "relative",

  img: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
}));

export const User = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "auto",
  justifyContent: "center",
  alignItems: "center",
}));

export const Verified = styled("div")(({ theme }) => ({
  display: "flex",
  width: "25px",
  height: "25px",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",

  bottom: 0,
  right: 0,
}));

export const BetsInfo = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "auto",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  marginTop: 20,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),

  fontSize: 16,
}));

export const BetInfoDetail = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "auto",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const Nav = styled("ul")(({ theme }) => ({
  width: "100%",
  height: "auto",
  padding: "10px 0",
  overflowY: "scroll",
  marginTop: 20,

  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const NavList = styled("li")(({ theme }) => ({
  marginBottom: "15px",
}));

export const NavItem = styled("a")(({ theme }) => ({
  display: "flex",
  padding: "15px 20px",
  cursor: "pointer",

  //borderBottom: `1px solid ${theme.palette["divider"].main}`,
  borderBottomColor: "rgba(255, 255, 255, 0.1)",
  borderBottomWidth: 0.1,
  borderBottomStyle: "solid",

  "&:hover": {
    //backgroundColor: theme.palette["red"].main,
  },

  span: {
    color: theme.palette["white"].main,
    marginLeft: 16,
  },

  img: {
    width: 27,
    height: 25,
  },
}));

export const Icon = styled("div")(({ theme }) => ({
  //marginBottom: "15px",
}));
