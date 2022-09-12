import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  // padding: theme.spacing(1),
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: window.innerHeight,
  flexDirection: "column",
  overflow: "hidden",
}));

export const App = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette["background-dark"].main,
  maxWidth: "390px",
  width: "100%",
  height: "100%",
  overflow: "hidden",

  display: "grid",
  position: "relative",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns: "auto 1fr",
  gridTemplateAreas: `
    "sidebar header"
    "sidebar content"
  `,
}));
