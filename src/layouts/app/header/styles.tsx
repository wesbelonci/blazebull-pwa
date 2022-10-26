import { styled } from "@mui/system";

export const Container = styled("div")<{ shadow: boolean }>(
  ({ theme, shadow }) => ({
    gridArea: "header",
    display: "flex",
    maxWidth: "428px",
    height: "70px",
    //padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    justifyContent: "space-between",
    backgroundColor: theme.palette["background-dark"].main,
    alignItems: "center",
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 500,
    boxShadow: shadow ? "-6px 5px 10px rgba(0, 0, 0, 0.3)" : "",
    // margin: "0 auto",
  })
);

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
  justifyContent: "flex-end",
  alignItems: "center",
  border: "none",
  outline: "none",
}));
