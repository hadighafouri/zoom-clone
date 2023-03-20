import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Entypo name="notification" size={30} color="#ffff" />
      <Text style={styles.heading}>Meet & Chat</Text>
      <Entypo name="new-message" size={30} color="#ffff" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: 700,
  },
});
