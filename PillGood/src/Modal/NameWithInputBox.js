import React, { useState } from "react";
import { View, Text } from 'react-native'

import InputBox from "./InputBox";

export default function NameWithInputBox(props) {
  const handleTextChange = (text) => {
    onChange(text)
    console.log(props.value)
  }
  return (
    <View style={styles.labelStyle}>
      <Text style={styles.labelTextStyle}>{props.name}</Text>
      <InputBox value={props.value} onChange={handleTextChange} />
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
  },
}