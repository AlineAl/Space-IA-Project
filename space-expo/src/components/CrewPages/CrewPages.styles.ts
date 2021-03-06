import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    minHeight: "100%",
  },
  displayTablet: {
    display: "flex",
    flexDirection: "column-reverse",
  },
  displayDesktop: {
    display: "flex",
    flexDirection: "row-reverse",
    width: windowWidth,
  },
  displayTitleCrewTablet: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    marginLeft: "2rem",
  },
  displayTitleCrewDesktop: {
    marginLeft: "12rem",
    marginTop: "6rem",
  },
  titleCrew: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "BarlowCondensed_400Regular",
    textTransform: "uppercase",
    fontSize: 20,
    letterSpacing: 3.38,
  },
  titleCrewTablet: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    marginLeft: "2rem",
    color: "#FFFFFF",
    fontFamily: "BarlowCondensed_400Regular",
    textTransform: "uppercase",
    fontSize: 20,
    letterSpacing: 3.38,
  },
  titleCrewDesktop: {
    color: "#FFFFFF",
    fontFamily: "BarlowCondensed_400Regular",
    textTransform: "uppercase",
    fontSize: 28,
    letterSpacing: 4.72,
    marginLeft: "12rem",
    marginTop: "4rem",
  },
  divImage: {
    borderBottomColor: "#383B4B",
    borderBottomWidth: 1,
    width: 327,
    margin: "auto",
  },
  divImageTablet: {
    margin: "auto",
    position: "relative",
    zIndex: 40,
  },
  imagesCrew: {
    width: 226,
    height: 250,
    margin: "auto",
    marginTop: 0,
  },
  imagesCrewTablet: {
    width: 340,
    height: 390,
    margin: "auto",
    marginTop: "4rem",
    position: "relative",
    bottom: -22,
  },
  imagesCrewDesktop: {
    width: 500,
    height: 607,
    position: "relative",
    marginTop: "2rem",
  },
  bodyTextCrew: {
    textAlign: "center",
    marginTop: "3.5rem",
    width: windowWidth,
  },
  bodyTextCrewTablet: {
    textAlign: "center",
    marginTop: "2rem",
    width: windowWidth,
  },
  bodyTextCrewDesktop: {
    marginTop: "10rem",
    marginLeft: "12rem",
  },
  roleText: {
    color: "#FFFFFF",
    fontFamily: "Bellefair_400Regular",
    fontSize: 16,
    textTransform: "uppercase",
    opacity: 0.5,
  },
  roleTextTablet: {
    color: "#FFFFFF",
    fontFamily: "Bellefair_400Regular",
    fontSize: 24,
    textTransform: "uppercase",
    opacity: 0.5,
  },
  roleTextDesktop: {
    color: "#FFFFFF",
    fontFamily: "Bellefair_400Regular",
    fontSize: 32,
    textTransform: "uppercase",
    opacity: 0.5,
  },
  nameText: {
    color: "#FFFFFF",
    fontFamily: "Bellefair_400Regular",
    fontSize: 24,
    textTransform: "uppercase",
    marginTop: "0.5rem",
  },
  nameTextTablet: {
    color: "#FFFFFF",
    fontFamily: "Bellefair_400Regular",
    fontSize: 40,
    textTransform: "uppercase",
    marginTop: "0.5rem",
  },
  nameTextDesktop: {
    color: "#FFFFFF",
    fontFamily: "Bellefair_400Regular",
    fontSize: 56,
    textTransform: "uppercase",
    marginTop: "0.5rem",
  },
  bioText: {
    color: "#D0D6F9",
    fontFamily: "Barlow_400Regular",
    fontSize: 15,
    marginTop: "1rem",
    lineHeight: 22,
    marginHorizontal: "1rem",
  },
  bioTextDesktop: {
    color: "#D0D6F9",
    fontFamily: "Barlow_400Regular",
    fontSize: 18,
    marginTop: "1rem",
    lineHeight: 32,
    width: 444,
  },
});

export default styles;
