import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  inner_container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  info_container: {
    flexDirection: "row",
  },
  music_artist: {},
  music_year: {
    fontSize: 12,
    marginLeft: 10,
  },
  music_stock_container: {},
  music_stock: {},
});
