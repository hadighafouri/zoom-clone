import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

export const SearchBar = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType="default"
        // placeholder="Search"
      >
        <Fontisto name="search" size={20} color="#808080" />
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: "#B4BDB6",
    marginBottom: 20,
    marginHorizontal: 5,
    padding: 10,
  },
});
