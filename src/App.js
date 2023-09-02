import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import Card from "./Card";

// Image
import sampleAvatar from "../assets/avatar.jpg";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card
        image={sampleAvatar}
        name="Music Name"
        description="description"
        year="2000"
      />
      <Card
        image={sampleAvatar}
        name="Music Name"
        description="description"
        year="2000"
      />
      <Card
        image={sampleAvatar}
        name="Music Name"
        description="description"
        year="2000"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E3E3",
    alignItems: "center",
    justifyContent: "center",
  },
});
