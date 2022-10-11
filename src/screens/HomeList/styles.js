import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    alignItems: "center",
  },
  header: {
    height: 112,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
  },
  headerText: {
    fontSize: 16,
    fontFamily: "CairoSBold",
    color: "#FFFFFF",
    marginTop: 40,
  },
  boxContainer: {
    width: "43.5%",
    height: 136,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    shadowColor: "#D4D4D4",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 5,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  boxTitle: {
    fontSize: 16,
    color: "#2D2D2D",
    textAlign: "center",
    fontFamily: "CairoSBold",
  },
  boxImage: {
    backgroundColor: "#F8F8FF",
    borderColor: "#A2AFCE",
    borderWidth: 1,
    borderRadius: 1000,
    width: 49,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
  },

  headerContainer: {
    marginTop: 40,
    width: "93.5%",
    height: 50,
  },
  textheader: {
    textAlign: "right",
    color: "#000000",
  },
  itemContainer: { height: "88%", left: 5, marginTop: 95 },
});
