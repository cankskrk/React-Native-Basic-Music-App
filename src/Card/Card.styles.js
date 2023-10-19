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
    flex: 1,
    alignItems: "center",
  },
  music_artist: {},
  music_year: {
    fontSize: 12,
    marginLeft: 10,
    borderRadius: 5,
    padding: 5,
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: "red",
    marginTop: 10,
    padding: 3,
  },
  soldout_title: {
    color: "red",
  },
  content_container: {
    flexDirection: "row",
  },
});
