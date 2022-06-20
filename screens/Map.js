import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({
      latitude: latitude,
      longitude: longitude,
    });
  };

  return (
    <MapView
      initialRegion={region}
      style={styles.mapPreview}
      onPress={selectLocationHandler}
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
