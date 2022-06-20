import React, { useCallback } from "react";
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import ButtonUI from "./UI/Button";

const PlaceForm = () => {
  const [title, setTitle] = React.useState("");
  const [pickedLocation, setPickedLocation] = React.useState(null);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const takeImageHandler = (image) => {
    setSelectedImage(image);
  };

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  const handleSubmit = () => {
    console.log([title, pickedLocation, selectedImage]);
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
      <ImagePicker onImageTaken={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <ButtonUI onPress={handleSubmit}>Save Place</ButtonUI>
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
