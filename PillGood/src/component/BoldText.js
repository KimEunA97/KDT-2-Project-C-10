

import React from "react";
import { Text } from "react-native";

export default function BoldText(props) {



  return (

    <Text style={styles.customFont}>{props.name}</Text>
  )

}

const styles = {

  customFont: {
    fontSize: 20,
  }
}