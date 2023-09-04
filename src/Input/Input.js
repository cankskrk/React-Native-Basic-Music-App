import { TextInput } from "react-native";
import { useState } from "react";

// Style
import styles from "./Input.style";

const Input = () => {
  const [text, setText] = useState("");

  const changeText = (newText) => {
    setText(newText);
  };

  return (
    <TextInput
      style={styles.container}
      onChangeText={changeText}
      value={text}
      placeholder="Search..."
    />
  );
};

export default Input;
