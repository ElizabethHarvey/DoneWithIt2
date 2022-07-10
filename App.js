import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Switch, Text, TextInput, View } from "react-native";
import AppButton from "./components/Button";
import { UserInterfaceIdiom } from "expo-constants";

import WelcomeScreen from "./screens/WelcomeScreen";
import Card from "./components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import MessagesScreen from "./screens/MessagesScreen";
import Screen from "./components/Screen";
import Icon from "./components/Icon";
import ListItem from "./components/lists/ListItem";
import AccountScreen from "./screens/AccountScreen";
import ListingsScreen from "./screens/ListingsScreen";
import AppTextInput from "./components/TextInput";
import Picker from "./components/Picker";
import LoginScreen from "./screens/LoginScreen";
import ListingEditScreen from "./screens/ListingEditScreen";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permissions");
  };

  useEffect(async () => {
    requestPermission();
  }, []);
  return <Screen></Screen>;
}
