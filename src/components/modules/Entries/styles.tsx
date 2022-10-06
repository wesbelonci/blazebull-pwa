import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "block",
  // backgroundColor: theme.palette["red"].main,
  //justifyContent: "center",
  width: "100%",
  height: "auto",
  overflow: "hidden",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
}));

export const Title = styled("div")(({ theme }) => ({
  fontSize: 22,
  fontWeight: 700,
  color: theme.palette["white"].main,
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
