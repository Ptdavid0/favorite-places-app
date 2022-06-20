import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlaces from "./screens/AddPlaces";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";
import { init } from "./util/database";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your favorite places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  color={tintColor}
                  icon={"add"}
                  size={24}
                  onPress={() => {
                    navigation.navigate("AddPlaces");
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlaces"
            component={AddPlaces}
            options={{
              title: "Add a new place",
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{
              title: "Map View",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
