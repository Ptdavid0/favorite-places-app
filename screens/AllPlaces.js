import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import PlacesList from "../components/PlacesList";

const AllPlaces = ({ route }) => {
  const [places, setPlaces] = React.useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params && !placeAlreadyExists(route.params.place)) {
      setPlaces((prevPlaces) => [route.params.place, ...prevPlaces]);
    }
  }, [isFocused, route]);

  const placeAlreadyExists = (place) => {
    return places.find((p) => p.id === place.id);
  };

  return <PlacesList places={places} />;
};

export default AllPlaces;
