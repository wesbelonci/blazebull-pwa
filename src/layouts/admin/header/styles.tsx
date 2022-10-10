import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  gridArea: "header",
  display: "flex",
  width: "100%",
  height: "70px",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  justifyContent: "space-between",
  backgroundColor: theme.palette["background-dark"].main,
  alignItems: "center",
  transition: "all 0.5s ease-in-out 0s",
}));

export const Navigation = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Logo = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100px",
  height: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
}));

export const Hamburguer = styled("button")(({ theme }) => ({
  display: "flex",
  width: "100px",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  outline: "none",

  img: {
    width: 40,
    height: 40,
  },
}));

export const UserContent = styled("div")(({ theme }) => ({
  display: "flex",
  width: "180px",
  height: "100%",
  alignItems: "center",
  position: "relative",
  zIndex: 999,

  paddingTop: "10px",
  paddingBottom: "10px",
}));

export const User = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100px",
  height: "100%",
  justifyContent: "flex-end",
  alignItems: "center",
  position: "relative",
  marginLeft: "20px",
  padding: "20px 25px",

  span: {
    color: theme.palette["white"].main,
    fontWeight: "500",
    marginLeft: "15px",
  },
}));

export const Avatar = styled("div")(({ theme }) => ({
  display: "flex",
  width: "50px",
  height: "50px",
  objectFit: "contain",
  cursor: "pointer",
  borderRadius: "50px",
  position: "relative",

  img: {
    width: "100%",
    height: "100%",
    borderRadius: "50px",
  },
}));
