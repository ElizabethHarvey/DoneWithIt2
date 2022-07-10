import React, { useState } from "react";
import { Switch, Text, TextInput, View } from "react-native";
import AppButton from "./components/AppButton";
import { UserInterfaceIdiom } from "expo-constants";

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
import AppPicker from "./components/AppPicker";
import LoginScreen from "./screens/LoginScreen";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];
// const [category, setCategory] = useState(categories[0]);
// <Screen>
//   <AppPicker
//     selectedItem={category}
//     onSelectItem={(item) => setCategory(item)}
//     items={categories}
//     icon="apps"
//     placeholder="Category"
//   />
//   <AppTextInput icon="email" placeholder="Email" />
// </Screen>

export default function App() {
  return <LoginScreen />;
}
