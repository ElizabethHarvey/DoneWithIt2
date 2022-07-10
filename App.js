import React, { useState } from "react";
import { Switch, Text, TextInput, View } from "react-native";
import AppButton from "./components/AppButton";

import WelcomeScreen from "./screens/WelcomeScreen";
import Card from "./components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import MessagesScreen from "./screens/MessagesScreen";
import Screen from "./components/Screen";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import AccountScreen from "./screens/AccountScreen";
import ListingsScreen from "./screens/ListingsScreen";
import AppTextInput from "./components/AppTextInput";
import { UserInterfaceIdiom } from "expo-constants";

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}
