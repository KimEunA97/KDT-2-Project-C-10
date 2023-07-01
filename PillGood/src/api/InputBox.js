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
    width: 150,
    height: 40, // 적절한 높이 값으로 수정
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
    alignSelf: 'center' // 중앙 정렬 추가
  },
});
