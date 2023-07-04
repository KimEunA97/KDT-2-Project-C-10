

import React from "react";
import { Text, View } from "react-native";

export default function BoldText(props) {

  const { name, fontSize } = props;


  return (
    <View style={styles.align}>
      <View style={[styles.ListAllStyle, {fontSize}]}>
      <Text style={styles.customFont}>{props.name}</Text>
    </View>
    </View >
  )

}

BoldText.defaultProps = {
  fontSize: 20,
};


const styles = {
  align: {
    justifyContent: "center",
    alignItems: "center",

  },
  ListAllStyle: {
    width: '80%',
    backgroundColor: '#167286',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customFont: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  }
}