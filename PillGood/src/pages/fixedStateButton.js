import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function FixedStateButton() {

  return (
    <View style={styles.fixedContainer}>
      <View style={styles.detailContainer}>

        <TouchableOpacity>
          <Text>약 이미지</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>남은 시간</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>확인버튼</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  fixedContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#79BFFF',
    padding: 40,

  },
  detailContainer: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-around"

  }
});
