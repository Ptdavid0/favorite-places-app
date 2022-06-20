import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import OutlinedButton from "./UI/OutlinedButton";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

const LocationPicker = () => {
  const [locationPermisson, requestPermission] = useForegroundPermissions();
  const verifyPermissions = async () => {
    if (locationPermisson.status === PermissionStatus.UNDETERMINED) {
      const permisisonResponse = await requestPermission();

      return permisisonResponse.granted;
    }

    if (locationPermisson.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Location Permission",
        "Location permission is required to use this feature. Please allow it in settings.",
        [{ text: "OK" }]
      );
      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    console.log(location);
  };

  const pickLocationOnMapHandler = () => {
    console.log("Getting location");
  };

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton icon={"location"} onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon={"map"}>Pick On Map</OutlinedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    height: 200,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3e3e3",
    marginHorizontal: 24,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default LocationPicker;
