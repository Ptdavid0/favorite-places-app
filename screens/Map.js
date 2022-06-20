import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView initialRegion={region} style={styles.mapPreview} />;
};

const styles = StyleSheet.create({
  mapPreview: {
    flex: 1,
  },
});

export default Map;
