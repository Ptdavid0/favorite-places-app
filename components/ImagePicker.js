import React from "react";
import { View, Alert, Image, Text, StyleSheet, Button } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import OutlinedButton from "./UI/OutlinedButton";

const ImagePicker = ({ onImageTaken }) => {
  const [cameraPermission, requestPermission] = useCameraPermissions();
  const [image, setImage] = React.useState(null);

  const verifyPermissions = async () => {
    if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
      const permisisonResponse = await requestPermission();

      return permisisonResponse.granted;
    }

    if (cameraPermission.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Camera Permission",
        "Camera permission is required to use this feature. Please allow it in settings.",
        [{ text: "OK" }]
      );
      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermisison = await verifyPermissions();

    if (!hasPermisison) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5, // remember this for weak devices
    });

    setImage(image.uri);
    onImageTaken(image.uri);
  };

  return (
    <View>
      <View style={styles.imagePreview}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text>No image selected</Text>
        )}
      </View>
      <OutlinedButton onPress={takeImageHandler} icon={"camera"}>
        Take Photo
      </OutlinedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePreview: {
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3e3e3",
    marginHorizontal: 24,
    overflow: "hidden",
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});

export default ImagePicker;
