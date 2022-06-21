import React, { useCallback, useLayoutEffect } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

const Map = ({ navigation, route }) => {
  const initialLocation = route.params?.initialLocation;
  const [selectedLocation, setSelectedLocation] =
    React.useState(initialLocation);

  const region = {
    latitude: initialLocation ? initialLocation.latitude : 37.78,
    longitude: initialLocation ? initialLocation.longitude : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          onPress={savePickedLocationHandler}
          icon="save"
          color={tintColor}
          size={24}
        />
      ),
    });
  }, [
    navigation,
    savePickedLocationHandler,
    selectedLocation,
    initialLocation,
  ]);

  const selectLocationHandler = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({
      latitude: latitude,
      longitude: longitude,
    });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No location selected", "Please pick a location first.", [
        { text: "Okay" },
      ]);
      return;
    }
    navigation.navigate("AddPlaces", { pickedLocation: selectedLocation });
  }, [navigation, selectedLocation]);

  return (
    <MapView
      initialRegion={region}
      style={styles.mapPreview}
      onPress={initialLocation ? () => {} : selectLocationHandler}
    >
      {selectedLocation && <Marker coordinate={selectedLocation} />}
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    flex: 1,
  },
});

export default Map;
