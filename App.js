import React from "react";
import { Text, View, StyleSheet } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";

import AppText from "./components/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>I love React Native</AppText>
    </View>
  );
}
