import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: Dimensions.get("window").width,
    padding: 30,
    justifyContent: "space-around",
    shadowOffset: { height: 2, width: 0 },
    shadowColor: "#000",
    elevation: 5,
    marginBottom: 5,
  },
  avatar: {
    borderRadius: 100 / 2,
    width: 100,
    height: 100,
  },
  music_description_container: {
    alignItems: "flex-start",
    marginRight: 60,
    marginLeft: 20,
  },
  music_name: {
    fontWeight: "bold",
    fontSize: 25,
  },
  desc_year_container: {
    alignItems: "center",
    flexDirection: "row",
  },
  music_description: {
    fontSize: 15,
    marginRight: 10,
  },
  music_yearInfo: {
    fontSize: 12,
  },
  music_stockInfo_container: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
  },
  music_stockInfo: {
    color: "red",
  },
});
