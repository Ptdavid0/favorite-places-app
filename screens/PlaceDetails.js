import React, { useLayoutEffect } from "react";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/colors";

const PlaceDetails = ({ route, navigation }) => {
  const showOnMapHandler = () => {
    navigation.navigate("Map", {
      initialLocation: route.params.place.location,
    });
  };
  const { place } = route.params;

  console.log(place);

  useLayoutEffect(() => {
    if (place) {
      navigation.setOptions({
        headerTitle: place.title,
      });
    }
  }, [navigation, place]);

  if (!place) {
    return <Text>Loading Data</Text>;
  }

  return (
    <ScrollView>
      <Image style={styles.Image} source={{ uri: place.imageUrl }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.adress}</Text>
        </View>
        <OutlinedButton icon={"map"} onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: "35%",
    minHeight: 300,
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PlaceDetails;
