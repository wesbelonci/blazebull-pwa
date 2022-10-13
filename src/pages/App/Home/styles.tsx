import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  alignItems: "center",
  width: "100%",
  height: window.innerHeight - 70,
  flexDirection: "column",
  overflow: "hidden",
  overflowY: "hidden",
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  // paddingLeft: theme.spacing(1.8),
  // paddingRight: theme.spacing(1.8),
  //maxWidth: "390px",
  width: "100%",
  height: "auto",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  overflowX: "hidden",
  overflowY: "hidden",
  // resize: "vertical",
}));

export const Blaze = styled("div")(({ theme }) => ({
  display: "block",
  overflow: "hidden",
  width: "100%",
  height: "690px",
  marginBottom: "-80px",
  backgroundColor: theme.palette["background-dark"].main,
}));

export const Rooms = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "auto",
  flexDirection: "column",
  justifyContent: "flex-start",
  // justifyContent: "flex-start",
  paddingLeft: theme.spacing(1.8),
  paddingRight: theme.spacing(1.8),

  h2: {
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
  backgroundPosition: "-100% 75%",
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
    marginBottom: "0!important",
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
    marginBottom: "0!important",
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
  height: "auto",
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
  marginTop: 10,

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

export const Course = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: 15,
}));

export const CourseHeader = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  marginBottom: 10,
  paddingLeft: theme.spacing(1.8),
  paddingRight: theme.spacing(1.8),

  h2: {
    fontSize: 20,
    color: theme.palette["white"].main,
    // marginBottom: 10,
  },

  span: {
    fontWeight: 700,
    fontSize: 14,
    color: theme.palette["lightish-blue"].main,
  },

  svg: {
    color: theme.palette["lightish-blue"].main,
  },
}));

export const KeepWatching = styled("div")(({ theme }) => ({
  display: "block",
  padding: "56.25% 0 0 0",
  position: "relative",
  zIndex: 100,
  width: "100%",

  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    zIndex: 999,
  },
}));
