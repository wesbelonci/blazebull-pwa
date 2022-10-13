import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "428px",
  width: "100%",
  //minHeight: window.innerHeight,
  height: "100%",
  flexDirection: "column",
  overflow: "hidden",
  margin: "0 auto",
  position: "relative",
}));

export const App = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette["background-dark"].main,
  //width: "max(100%, 360px)",
  maxWidth: "428px",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  // position: 'relative',

  display: "grid",
  position: "relative",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns: "auto 1fr",
  gridTemplateAreas: `
    "sidebar header"
    "sidebar content"
  `,
}));
