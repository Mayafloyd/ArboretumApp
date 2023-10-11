// src/navigation/Navigation.tsx

import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import CampusScreen from "../screens/CampusScreen";
import { ItemData } from "../components/ProfileSquare";

// Define los tipos para las rutas y los parámetros
type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string; item: ItemData };
  SearchScreen: { type: string; title?: string; info?: any[] };
  CampusScreen: undefined;
};

// Define las props para la navegación en Stack.Navigator
export type RootStackScreenProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ title: "Pantalla de búsqueda" }}
      />
      <Stack.Screen
        name="CampusScreen"
        component={CampusScreen}
        options={{ title: "Campus" }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
