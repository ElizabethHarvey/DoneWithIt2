import React from "react";
import { View } from "react-native";
import AppButton from "./components/AppButton";

import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppButton title="Login" onPress={() => console.log("Tapped")} />
    </View>
  );
}
