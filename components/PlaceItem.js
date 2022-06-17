import React from "react";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";

const PlaceItem = ({ place, onSelect }) => {
  const { title, imageUrl, adress } = place;
  return (
    <Pressable onPress={onSelect}>
      <Image source={imageUrl} />
      <View>
        <Text>{title}</Text>
        <Text>{adress}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default PlaceItem;
