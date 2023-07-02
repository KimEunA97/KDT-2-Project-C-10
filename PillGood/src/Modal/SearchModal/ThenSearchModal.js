import React, { useState, StyleSheet } from "react";
import UserPressButton from "../UserPressButton";


export default function ThenSearchModal({ onClose }) {

  const [invisible, setInvisible] = useState(false);

  return (
    <Modal visible={invisible} transparent
      style={{ flex: 0.8, }}>
      <View>
        <Text>asd</Text>
        <Text>asd</Text>
        <Text>asd</Text>
        <View style={styles.buttonContainer}>
          <UserPressButton
            name="확인"
            color="#00BC9A"
            onPress={onClose} />
          <UserPressButton
            name="취소"
            color="#4B73FF"
            onPress={onClose} />
        </View>

      </View>
    </Modal>
  )

}

const styles = {
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}