import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { ContactsMenu } from "../components/ContactsMenu";
import { Header } from "../components/Header";
import { MenuButton } from "../components/MenuButton";
import { SearchBar } from "../components/SearchBar";

export const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <SearchBar />
        <MenuButton />
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
