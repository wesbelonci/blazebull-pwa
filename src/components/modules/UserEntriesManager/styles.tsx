import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "block",
  // backgroundColor: theme.palette["red"].main,
  //justifyContent: "center",
  width: "100%",
  height: "auto",
  overflow: "hidden",
  marginTop: 20,
  paddingLeft: theme.spacing(1.8),
  paddingRight: theme.spacing(1.8),
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  // paddingLeft: theme.spacing(1.8),
  // paddingRight: theme.spacing(1.8),
}));

export const Title = styled("div")(({ theme }) => ({
  fontSize: 20,
  color: theme.palette["white"].main,
  marginBottom: 10,
}));

export const Live = styled("div")(({ theme }) => ({
  display: "flex",
  width: "60px",
  height: "20px",
  borderRadius: 15,
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
  backgroundColor: theme.palette["red"].main,
  padding: 10,
  // top: -10,
  // right: 10,
  zIndex: 90,
  marginLeft: 10,
  color: theme.palette["white"].main,

  span: {
    marginBottom: 0,
    fontSize: 10,
    color: theme.palette["white"].main,
    paddingLeft: theme.spacing(0.2),
    paddingRight: theme.spacing(0.2),
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
    backgroundColor: "#007AFF",
    width: 30,
    height: 20,
    borderRadius: 15,
    color: theme.palette["white"].main,
    fontSize: 12,
    marginLeft: 10,
  })
);

export const DividerStats = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
  color: theme.palette["white"].main,

  span: {
    marginBottom: 0,
    fontSize: 12,
    paddingLeft: theme.spacing(0.2),
    paddingRight: theme.spacing(0.2),
  },
}));

export const CardContainer = styled("div")(({ theme }) => ({
  display: "block",
  width: "100%",
  height: "auto",
  zIndex: 90,
}));

export const GameResults = styled("button")(({ theme }) => ({
  display: "flex",
  marginTop: 10,
  width: "100%",
  borderWidth: 1,
  borderColor: theme.palette["red"].main,
  borderRadius: 12,
  // backgroundImage: `linear-gradient(to right, rgba(255,255,255,0) 5%,${theme.palette["background-dark"].main}), url(/assets/images/bg-room-crash.webp)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: 300,
  position: "relative",
  flexDirection: "column",

  // padding: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
}));

export const HeaderResult = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",

  h2: {
    color: theme.palette["white"].main,
    fontSize: 20,
    fontWeight: 700,
  },

  span: {
    color: theme.palette["white"].main,
  },
}));

export const FinancialStatus = styled("button")(({ theme }) => ({
  display: "flex",
  marginTop: 10,
  width: "100%",
  // borderWidth: 1,
  // borderColor: theme.palette["red"].main,
  // borderRadius: 12,
  // backgroundImage: `linear-gradient(to right, rgba(255,255,255,0) 5%,${theme.palette["background-dark"].main}), url(/assets/images/bg-room-crash.webp)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: 200,
  position: "relative",
  flexDirection: "column",

  // padding: theme.spacing(2),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),

  fontWeight: 600,
}));

export const Divider = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  borderBottom: 1,
  borderStyle: "solid",
  borderColor: theme.palette["separator"].main,
}));
