import React from "react";
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import ImagePicker from "./ImagePicker";

const PlaceForm = ({}) => {
  const [title, setTitle] = React.useState("");

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          onChangeText={handleTitleChange}
          value={title}
          style={styles.input}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 16,
  },
});

export default PlaceForm;
