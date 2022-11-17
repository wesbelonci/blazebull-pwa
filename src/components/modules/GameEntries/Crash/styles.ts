import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "block",
  // backgroundColor: theme.palette["red"].main,
  //justifyContent: "center",
  width: "100%",
  height: "auto",
  overflow: "hidden",
  // overflowX: "auto",
  paddingBottom: 50,
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

export const Table = styled("table")(({ theme }) => ({
  // display: "block",
  // height: "100%",
  marginTop: 10,
  // display: "flex",
  // width: "100%",
  // justifyContent: "space-between",
  // flexDirection: "row",
  // alignItems: "center",
}));

export const Entry = styled("tr")<{ type: "win" | "loss" }>(
  ({ theme, type }) => ({
    // display: "block",
    height: "100%",
    width: "100%",
    fontSize: 14,
    textAlign: "center",

    backgroundColor:
      type === "win" ? "rgba(50, 215, 75, .2)" : "rgba(241, 44, 76, 0.2)",

    border: "0.5px solid rgba(58, 58, 58, 0.8)",
    // display: "flex",
    // width: "100%",
    // justifyContent: "space-between",
    // flexDirection: "row",
    // alignItems: "center",
  })
);

export const Marker = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 20,
  height: 20,
  cursor: "pointer",

  // background: theme.palette["white"].main,
  color: theme.palette["white"].main,
  padding: 2,
  borderRadius: 5,
}));
