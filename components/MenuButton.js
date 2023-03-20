import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import Foundation from "react-native-vector-icons/Foundation";

export const MenuButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "orange" }}
        >
          <FontAwesome name={"video-camera"} size={23} color={"#efefef"} />
        </TouchableOpacity>
        <Text style={styles.textBtn}>New Meeting</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Octicons name={"diff-added"} size={23} color={"#efefef"} />
        </TouchableOpacity>
        <Text style={styles.textBtn}>Join</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name={"calendar"} size={23} color={"#efefef"} />
        </TouchableOpacity>
        <Text style={styles.textBtn}>Schedule</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Foundation name={"projection-screen"} size={23} color={"#efefef"} />
        </TouchableOpacity>
        <Text style={styles.textBtn}>Share Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnContainer: {
    alignItems: "center",
    flex: 1,
  },
  textBtn: {
    color: "#858585",
    paddingTop: 10,
  },

  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    height: 50,
    width: 50,
    alignItems: "center",
  },
});
