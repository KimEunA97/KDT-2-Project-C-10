import React from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";


export default function ModalBox() {

  return (

    <View style={styles.alignContainer}>
      <Text>내용</Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.confirmStyle}>
          <Text style={styles.btnTextColor}>확인</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelStyle}>
          <Text style={styles.btnTextColor}>취소</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = {
  alignContainer: {

    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",

  },

  btnContainer: {

    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "black"

  },
  confirmStyle: {

    width: "30%",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "blue"

  },
  cancelStyle: {
    width: "30%",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "red"
  },
  btnTextColor: {
    color: "white"
  }
}