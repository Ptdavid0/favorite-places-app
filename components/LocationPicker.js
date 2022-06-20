import React from "react";
import { View, StyleSheet } from "react-native";
import OutlinedButton from "./UI/OutlinedButton";

const LocationPicker = () => {
  const getLocationHandler = () => {
    console.log("Getting location");
  };

  const pickLocationOnMapHandler = () => {
    console.log("Getting location");
  };

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton icon={"location"}>Locate User</OutlinedButton>
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
