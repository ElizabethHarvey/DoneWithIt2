import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
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

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        secureTextEntry
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}
