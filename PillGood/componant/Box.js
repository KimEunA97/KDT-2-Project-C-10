import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";



function Box(props) {
  return <View style={[styles.box, props.rounded ? styles.rounded : null]}>
    <StatusBar style="auto"></StatusBar>
  </View>
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