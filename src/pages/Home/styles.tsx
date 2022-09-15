import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  alignItems: "center",
  width: "100%",
  height: window.innerHeight,
  flexDirection: "column",
  overflow: "hidden",
  overflowY: "hidden",
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  maxWidth: "390px",
  width: "100%",
  height: "auto",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  overflowX: "hidden",
  overflowY: "hidden",
  // resize: "vertical",

  // "&::before": {
  //   content: '""',
  //   // backgroundColor: theme.palette["background-dark"].main,
  //   backgroundImage:
  //   backgroundRepeat: "no-repeat",
  //   opacity: 0.2,
  //   backgroundPosition: "50% 50%",
  //   // backgroundSize: "content",
  //   backgroundSize: "cover",
  //   position: "fixed",
  //   maxWidth: "390px",
  //   width: "100%",
  //   // height: "100vh",
  //   height: window.innerHeight,
  //   top: -50,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   margin: "0 auto",
  //   // zIndex: -9,
  // },
}));

export const Blaze = styled("iframe")(({ theme }) => ({
  display: "block",
  overflow: "hidden",
  width: "100%",
  height: "690px",
  marginBottom: "-80px",
  resize: "none",
  border: "none",
}));

export const Rooms = styled("div")(({ theme }) => ({
  display: "div",
  width: "100%",
  height: "auto",
  justifyContent: "flex-start",

  span: {
    fontSize: 20,
    color: theme.palette["white"].main,
    marginBottom: 10,
  },
}));

export const Crash = styled("button")(({ theme }) => ({
  display: "flex",
  marginTop: 10,
  width: "100%",
  borderWidth: 1,
  borderColor: theme.palette["red"].main,
  borderRadius: 12,
  backgroundImage: `linear-gradient(to right, rgba(255,255,255,0) 5%,${theme.palette["background-dark"].main}), url(/assets/images/bg-room-crash.webp)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: 161,
  position: "relative",
}));

export const Double = styled("button")(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginTop: 20,
  borderWidth: 1,
  borderColor: theme.palette["red"].main,
  borderRadius: 12,
  backgroundImage: `linear-gradient(to right, rgba(255,255,255,0) 5%,${theme.palette["background-dark"].main}), url(/assets/images/bg-room-double.webp)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "-500% 75%",
  backgroundSize: "contain",
  height: 161,
  position: "relative",
}));

export const RoomStats = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "flex-end",
  flexDirection: "column",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  paddingRight: theme.spacing(1.5),

  span: {
    color: theme.palette["white"].main,
    fontSize: 12,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
}));

export const RoomStatsWin = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "auto",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  span: {
    marginBottom: 0,
    color: theme.palette["white"].main,
    fontSize: 12,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },

  svg: {
    color: theme.palette["lime-green"].main,
  },
}));

export const RoomStatsLoss = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "auto",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",

  span: {
    marginBottom: 0,
    color: theme.palette["white"].main,
    fontSize: 12,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },

  svg: {
    color: theme.palette["red"].main,
  },
}));

export const Badge = styled("div")<{ type?: "win" | "loss" }>(
  ({ theme, type }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      type === "win"
        ? theme.palette["lime-green"].main
        : theme.palette["red"].main,
    width: 30,
    height: 20,
    borderRadius: 15,
    color: theme.palette["white"].main,
    fontSize: 12,
  })
);

export const Title = styled("div")(({ theme }) => ({
  display: "flex",
  height: 70,
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 10,

  span: {
    fontSize: 20,
    fontWeight: 700,
  },
}));

export const Rate = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "row",

  span: {
    fontSize: 12,
    paddingLeft: theme.spacing(0.2),
    paddingRight: theme.spacing(0.2),
  },
}));

export const DividerStats = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),

  span: {
    marginBottom: 0,
    fontSize: 12,
    paddingLeft: theme.spacing(0.2),
    paddingRight: theme.spacing(0.2),
  },
}));

export const Live = styled("div")(({ theme }) => ({
  display: "flex",
  width: "60px",
  height: "20px",
  borderRadius: 15,
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
  backgroundColor: theme.palette["red"].main,
  padding: 10,
  top: -10,
  right: 10,
  zIndex: 90,
  color: theme.palette["white"].main,

  span: {
    marginBottom: 0,
    fontSize: 10,
    color: theme.palette["white"].main,
    paddingLeft: theme.spacing(0.2),
    paddingRight: theme.spacing(0.2),
  },
}));
