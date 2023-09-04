import { View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import Card from "./Card";
import Input from "./Input";

// Data
import music_data from "./music-data.json";

export default function App() {
  const renderSeparator = () => <View style={styles.separator} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<Input />}
        data={music_data}
        renderItem={({ item }) => <Card data={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
});
