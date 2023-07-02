import React, { useState, StyleSheet } from "react";
import UserPressButton from "../UserPressButton";


export default function ThenSearchModal({ onClose, visible }) {


  const handleConfirm = () => {
    setInvisible(false)
    onClose();
  };

  const handleCancel = () => {
    setInvisible(false)
    onClose();
  };
  return (
    <Modal visible={visible} transparent
      style={{ flex: 0.8, }}>
      <View>
        <Text>asd</Text>
        <Text>asd</Text>
        <Text>asd</Text>
        <View style={styles.buttonContainer}>
          <UserPressButton
            name="확인"
            color="#00BC9A"
            onPress={handleConfirm} />
          <UserPressButton
            name="취소"
            color="#4B73FF"
            onPress={handleCancel} />
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