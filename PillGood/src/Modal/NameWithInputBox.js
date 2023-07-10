import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native'


export default function NameWithInputBox({ value, name }) {
  const [text, setText] = useState(value);

  const onChangeText = (text) => {
    setText(text);
    onChangeText(text)
  };

  return (
    <View style={styles.labelStyle}>
      <Text style={styles.labelTextStyle}>{name}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
      />


    </View>
  );
}

const styles = {
  labelStyle: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  labelTextStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  }, input: {
    width: 150,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: 'gray',
    padding: 5,
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
    alignSelf: 'center' // 중앙 정렬 추가
  }
}