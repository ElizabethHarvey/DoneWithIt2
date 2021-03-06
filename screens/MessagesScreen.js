import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";
import Constants from "expo-constants";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemsDeleteAction from "../components/lists/ListItemsDeleteAction";
import ListItemsSeparator from "../components/lists/ListItemsSeparator";

const initialMessage = [
  {
    id: 1,
    title: "Dad",
    description: "Hey! Is the dick still available?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Lizzy",
    description:
      "Im interested in this item. When will you be able to post it?",
    image: require("../assets/middlefinger.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemsDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemsSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/middlefinger.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
