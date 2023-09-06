import { View, Text, Image } from "react-native";

// Style
import styles from "./Card.style";

const Card = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.imageUrl }} />

      <View style={styles.inner_container}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text style={styles.music_artist}>{data.artist}</Text>
            <Text style={styles.music_year}>{data.year}</Text>
          </View>
          {data.isSoldOut && (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Card;
