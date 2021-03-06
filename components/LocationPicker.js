import React, { useEffect } from "react";
import { View, StyleSheet, Alert, Image, Text } from "react-native";
import OutlinedButton from "./UI/OutlinedButton";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { getMapPreview, getAdressFromLatLng } from "../util/location";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";

const LocationPicker = ({ onPickLocation }) => {
  const [locationPermisson, requestPermission] = useForegroundPermissions();
  const [location, setLocation] = React.useState(null);

  const navigate = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      const { pickedLocation } = route.params;
      setLocation({ ...pickedLocation });
    }
  }, [route, isFocused]);

  useEffect(() => {
    const handleLocation = async () => {
      if (location) {
        try {
          const address = await getAdressFromLatLng(location);
          onPickLocation({ ...location, address });
        } catch (error) {
          Alert.alert("Could not fetch location", error.message);
        }
      }
    };

    handleLocation();
  }, [location, onPickLocation]);

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

    if (!hasPermission) return;

    const {
      coords: { latitude, longitude },
    } = await getCurrentPositionAsync();

    setLocation({
      latitude,
      longitude,
    });
  };

  const pickLocationOnMapHandler = () => {
    navigate.navigate("Map");
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
        <OutlinedButton icon={"map"} onPress={pickLocationOnMapHandler}>
          Pick On Map
        </OutlinedButton>
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
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});

export default LocationPicker;
