import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default function InputBox({ value, onChange }) {
  const onChangeText = (text) => {
    onChange(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
