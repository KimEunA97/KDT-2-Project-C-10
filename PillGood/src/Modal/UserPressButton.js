import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function UserPressButton({ name, color, onPress }) {

  const styles = {
    confirmButton: {
      width: 120,
      backgroundColor: color,
      borderRadius: 10,
      padding: 5,
      margin: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    confirmText: {
      fontSize: 30,
      color: "white",
      fontWeight: "bold"
    },

  }

  return (
    <TouchableOpacity

      onPress={onPress}
      style={styles.confirmButton}>
      <Text style={styles.confirmText}>{name}</Text>
    </TouchableOpacity>
  )

}
