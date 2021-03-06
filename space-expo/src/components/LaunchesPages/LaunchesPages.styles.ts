import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: "130vh",
  },
  displayTitleLaunch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "1.5rem",
  },
  displayTitleLaunchTablet: {
    display: "flex",
    flexDirection: "row",
    marginTop: "3rem",
    marginBottom: "1.5rem",
    marginLeft: "2rem",
  },
  displayTitleLaunchDesktop: {
    display: "flex",
    flexDirection: "row",
    marginTop: "3rem",
    marginBottom: "1.5rem",
    marginLeft: "10rem",
  },
  numberTitleLaunch: {
    color: "#4D5057",
    fontWeight: "bold",
    fontFamily: "BarlowCondensed_400Regular",
    marginRight: "1rem",
    fontSize: 16,
  },
  numberTitleLaunchDesktop: {
    color: "#4D5057",
    fontWeight: "bold",
    fontFamily: "BarlowCondensed_400Regular",
    marginRight: "1rem",
    fontSize: 28,
    letterSpacing: 4.72,
  },
  titleLaunch: {
    color: "#FFFFFF",
    fontFamily: "BarlowCondensed_400Regular",
    textTransform: "uppercase",
    fontSize: 16,
    letterSpacing: 2.7,
  },
  titleLaunchDesktop: {
    color: "#FFFFFF",
    fontFamily: "BarlowCondensed_400Regular",
    textTransform: "uppercase",
    fontSize: 28,
    letterSpacing: 4.72,
  },
  contentBody: {
    width: windowWidth,
    height: "100%",
    marginTop: "2rem",
    textAlign: "center",
  },
  contentBodyDesktop: {
    width: windowWidth,
    height: "100%",
    marginTop: "2rem",
    display: "flex",
    flexDirection: "row-reverse",
  },
  infosLaunchesDesktop: {
    width: 444,
    marginRight: "10rem",
  },
  imageLaunche: {
    width: "100%",
    height: 170,
    resizeMode: "cover",
  },
  imageLauncheTablet: {
    width: "100%",
    height: 270,
    resizeMode: "cover",
  },
  imageLauncheDesktop: {
    width: 515,
    height: 527,
    resizeMode: "cover",
    marginBottom: "6rem",
  },
  terminoText: {
    textTransform: "uppercase",
    color: "#D0D6F9",
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 14,
    marginTop: "6rem",
    letterSpacing: 2.36,
  },
  terminoTextTablet: {
    textTransform: "uppercase",
    color: "#D0D6F9",
    fontFamily: "BarlowCondensed_400Regular",
    fontSize: 16,
    marginTop: "6rem",
    letterSpacing: 2.7,
  },
  titleLaunche: {
    textTransform: "uppercase",
    color: "#FFFFFF",
    fontFamily: "Bellefair_400Regular",
    fontSize: 24,
    marginTop: "0.5rem",
  },
  titleLauncheTablet: {
    textTransform: "uppercase",
    color: "#FFFFFF",
    fontFamily: "Bellefair_400Regular",
    fontSize: 40,
    marginTop: "0.5rem",
  },
  titleLauncheDesktop: {
    textTransform: "uppercase",
    color: "#FFFFFF",
    fontFamily: "Bellefair_400Regular",
    fontSize: 56,
    marginTop: "0.5rem",
  },
  descriptionLaunche: {
    marginTop: "1rem",
    fontFamily: "Barlow_400Regular",
    fontSize: 15,
    lineHeight: 22,
    color: "#D0D6F9",
    marginHorizontal: "1rem",
  },
  descriptionLauncheDesktop: {
    marginTop: "1rem",
    fontFamily: "Barlow_400Regular",
    fontSize: 18,
    lineHeight: 32,
    color: "#D0D6F9",
  },
  flexCarousel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: 335,
    width: "100%",
  },
  flexCarouselTablet: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: 522,
    width: "100%",
  },
  flexCarouselDesktop: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    top: 280,
    left: 160,
  },
  viewDotNumber: {
    borderRadius: 50,
    borderColor: "#4D5057",
    borderWidth: 1,
    width: 40,
    height: 40,
    marginRight: "0.5rem",
  },
  viewDotNumberDesktop: {
    borderRadius: 50,
    borderColor: "#4D5057",
    borderWidth: 1,
    width: 80,
    height: 80,
    marginTop: "0.5rem",
  },
  dotNumbers: {
    color: "#FFFFFF",
    display: "flex",
    margin: "auto",
  },
  dotNumbersDesktop: {
    color: "#FFFFFF",
    display: "flex",
    margin: "auto",
    fontSize: 32,
  },
  hoverDotNumber: {
    color: "#0B0D17",
    display: "flex",
    margin: "auto",
  },
  hoverDotNumberDesktop: {
    color: "#0B0D17",
    display: "flex",
    margin: "auto",
    fontSize: 32,
  },
  hoverViewDotNumber: {
    borderRadius: 50,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    width: 40,
    height: 40,
    marginRight: "0.5rem",
  },
  hoverViewDotNumberDesktop: {
    borderRadius: 50,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    width: 80,
    height: 80,
    marginRight: "0.5rem",
  },
});

export default styles;
