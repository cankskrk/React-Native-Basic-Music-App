import { TextInput } from "react-native";

// Style
import styles from "./SearchBar.styles";

const SearchBar = (props) => {
  return (
    <TextInput
      style={styles.container}
      onChangeText={props.onSearch}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
