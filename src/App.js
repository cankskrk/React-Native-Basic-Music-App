import { View, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import Card from "./Card";
import SearchBar from "./SearchBar";

// Data
import music_data from "./music-data.json";

export default function App() {
  const renderSeparator = () => <View style={styles.separator} />;
  const handleSearch = (text) => {
    const filteredList = music_data.filter((song) => {
      const searchedSong = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedSong) > -1; // Doğru ise şarkıyı array'e ekleyecek
    });
    setMusicList(filteredList);
  };

  // State
  const [musicList, setMusicList] = useState(music_data);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<SearchBar onSearch={handleSearch} />}
        data={musicList}
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
