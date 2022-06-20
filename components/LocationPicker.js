import React from "react";
import { View, StyleSheet, Alert, Image, Text } from "react-native";
import OutlinedButton from "./UI/OutlinedButton";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { getMapPreview } from "../util/location";

const LocationPicker = () => {
  const [locationPermisson, requestPermission] = useForegroundPermissions();
  const [location, setLocation] = React.useState(null);

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
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const pickLocationOnMapHandler = () => {
    console.log("Getting location");
  };

  return (
    <View>
      <View style={styles.mapPreview}>
        {location ? (
          <Image
            source={{ uri: getMapPreview(location) }}
            style={styles.mapImage}
          />
        ) : (
          <Text>No location selected</Text>
        )}
      </View>
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
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default LocationPicker;
