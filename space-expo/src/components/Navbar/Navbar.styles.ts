import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get("screen").height;

export default StyleSheet.create({
  Nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  NavMargin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3rem",
  },
  navTablet: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#262933",
    width: 450,
    alignItems: "center",
  },
  navDesktop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: 830,
    alignItems: "center",
    paddingLeft: "4rem",
  },
  separateLine: {
    borderBottomColor: "rgba(151, 151, 151, 0.26)",
    borderBottomWidth: 1,
    width: 474,
    position: "relative",
    zIndex: 1,
    right: -60,
  },
  imageLogoTablet: {
    width: 48,
    height: 48,
    marginLeft: 24,
  },
  imageLogo: {
    width: 36,
    height: 36,
    marginTop: 22,
    marginLeft: 24,
  },
  imageHamburger: {
    width: 22,
    height: 22,
    marginTop: 22,
    marginRight: 24,
  },
  modalBarContainer: {
    height: height,
    backgroundColor: "rgb(255, 255, 255)",
    width: 254,
    position: "absolute",
    right: 0,
    top: 0,
  },
  withoutMargin: {
    margin: 0,
  },
  iconClose: {
    width: 19.09,
    height: 19.09,
    color: "#D0D6F9",
    marginTop: 22,
    marginLeft: 214,
  },
  contentModal: {
    marginTop: "3rem",
    marginLeft: "2rem",
  },
  flexTitleModal: {
    display: "flex",
    flexDirection: "row",
    marginTop: "2rem",
  },
  numberModal: {
    color: "#FFFFFF",
    marginRight: "0.5rem",
    fontWeight: "bold",
    fontFamily: "BarlowCondensed_400Regular",
    letterSpacing: 2.7,
    fontSize: 16,
  },
  titleModal: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 16,
    letterSpacing: 2.7,
  },
  borderBottomTablet: {
    paddingVertical: "2.5rem",
  },
  borderBottomTabletActive: {
    paddingVertical: "2.5rem",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 3,
  },
  titleModalTablet: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 14,
    letterSpacing: 2.36,
  },
});
