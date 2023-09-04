import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 1.1,
    backgroundColor: "#E0E0E0",
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
    elevation: 10,
    shadowOffset: { height: 2, width: 0 },
    shadowColor: "#000",
  },
});
