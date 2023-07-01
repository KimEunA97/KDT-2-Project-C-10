import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default function InputBox({ value, onChange }) {
  const onChangeText = (text) => {
    onChange(text);
  };

  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   input: {
//     backgroundColor : "white",
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
