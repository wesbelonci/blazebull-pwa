import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  // transform: 'transictu'
  // transform: "translateX(20px)",

  ".slick-slide": {
    // padding: "0 25px",
    paddingLeft: 20,
    boxSizing: "border-box",

    // "&:first-of-type": {
    //   // paddingLeft: 25,
    // },
  },
}));

export const Slide = styled("div")(({ theme }) => ({
  display: "block",
  width: "100%",
  height: "100%",
  // paddingLeft: theme.spacing(0.8),
  // paddingRight: theme.spacing(0.8),
  paddingBottom: 10,
}));

export const Card = styled("div")<{ background: string }>(
  ({ theme, background }) => ({
    display: "flex",
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.63)), linear-gradient(180deg, rgba(0, 0, 0, 0) 5.21%, rgba(0, 0, 0, 0.9) 100%), url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "160px",
    height: "200px",
    borderRadius: 12,
    cursor: "pointer",
    boxShadow: "-6px 5px 10px rgba(0, 0, 0, 0.3)",
    padding: theme.spacing(1),
    // paddingLeft: theme.spacing(0.8),
    // paddingRight: theme.spacing(0.8),
    position: "relative",
    flexDirection: "column",

    ".check": {
      position: "absolute",
      top: 0,
      right: 0,
    },

    ".play": {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      margin: "0 auto",
    },

    ".title": {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      // height: "100%",
      position: "absolute",
      // top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      margin: "0 auto",
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(1.2),
      flexWrap: "wrap",

      span: {
        color: theme.palette["white"].main,
      },
    },
  })
);
