import React from "react";
import { StyleSheet, View } from "react-native";

function Box() {
  return <View style={[styles.box, styles.rounded]}></View>
}

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  }
});

export default Box;