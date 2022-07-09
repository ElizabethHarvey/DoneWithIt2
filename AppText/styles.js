import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fontSize: 18,
  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
});

export default styles;
