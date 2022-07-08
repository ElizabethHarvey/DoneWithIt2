import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
});
