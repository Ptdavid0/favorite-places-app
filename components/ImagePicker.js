import React from "react";
import { View, Button } from "react-native";
import { launchCameraAsync } from "expo-image-picker";
import ButtonUI from "./UI/Button";

const ImagePicker = () => {
  const takeImageHandler = async () => {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5, // remember this for weak devices
    });
  };

  return (
    <View>
      <View></View>
      <Button title={"Take Photo"} onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;
