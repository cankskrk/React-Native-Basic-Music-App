import { View, Text, Image } from "react-native";

// Style
import styles from "./Card.style";

const Card = ({ image, name, description, year }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={image} />

      <View>
        <View style={styles.music_description_container}>
          <Text style={styles.music_name}>{name}</Text>
          <View style={styles.desc_year_container}>
            <Text style={styles.music_description}>{description}</Text>
            <Text style={styles.music_yearInfo}>{year}</Text>
          </View>
        </View>
      </View>

      <View style={styles.music_stockInfo_container}>
        <Text style={styles.music_stockInfo}>Tükendi</Text>
      </View>
    </View>
  );
};

export default Card;
