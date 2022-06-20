import React from "react";
import PlaceForm from "../components/PlaceForm";

const AddPlaces = ({ navigation }) => {
  const createPlaceHandler = (placeData) => {
    navigation.navigate("AllPlaces", {
      place: placeData,
    });
  };

  return <PlaceForm createPlaceHandler={createPlaceHandler} />;
};

export default AddPlaces;
