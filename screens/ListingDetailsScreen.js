import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../AppText";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <View style={styles.detailsContainer}>
        <Image style={styles.image} source={require("../assets/jacket.jpg")} />
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/jacket.jpg")}
            title="Lizzy Harvey"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailsScreen;