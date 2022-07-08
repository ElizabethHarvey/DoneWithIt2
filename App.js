import React from "react";
import { Text, View } from "react-native";
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
      <Text
        style={{
          fontFamily: "HoeflerText-BlackItalic",
          fontSize: 30,
          fontWeight: "600",
          color: "purple",
          textTransform: "uppercase",
        }}
      >
        I love React Native
      </Text>
    </View>
  );
}
