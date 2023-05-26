import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";



export default function PillCreate() {

  return (

    <View style={styles.container}>
      <TouchableOpacity>
      <Text style={styles.border}>약 생성</Text>
      </TouchableOpacity>
    </View>

  )

}

const styles = {

  container: {
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingTop : 3,
  },
  border: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "black",

  },
  size:{
    innerWidth : 100,
    height : 100,
  }

}