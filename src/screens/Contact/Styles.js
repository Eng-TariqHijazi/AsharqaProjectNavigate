import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    flex: 1,
  },
  header: {
    height: 112,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "CairoSBold",
    color: "#FFFFFF",
    marginTop: 40,
  },
  scan: {
    width: 257,
    height: 257,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 70,
    marginTop: 180,
  },
  txt1: {
    fontSize: 22,
    fontFamily: "CairoBold",
    marginBottom: 30,
    color: "#262626",
  },
  txt2: {
    fontSize: 22,
    fontFamily: "CairoRegular",
    textAlign: "right",
    color: "#262626",
  },
  txt: {
    width: 300,
    alignItems: "flex-end",
    left: 40,
    alignSelf: "center",
  },
});
