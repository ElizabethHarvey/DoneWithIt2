import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/Text";
import Card from "../components/Card";
import Screen from "../components/Screen";
import listingsApi from "../components/api/listings";
import colors from "../config/colors";
import routes from "../navigation/routes";
import useApi from "../components/hooks/useApi";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket for sale",S
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 100,
//     image: require("../assets/couch.jpg"),
//   },
// ];

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 8,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
