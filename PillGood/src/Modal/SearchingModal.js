import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import NameWithInputBox from './NameWithInputBox';
import ItsTimePicker from './ItsTimePicker';
import UserPressButton from './UserPressButton';

export default function SearchingModal({
  handleSendValue,
  handleModalFalse,
  inputValue,
  setInputValue,
}) {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>

        <NameWithInputBox
          name="약이름 : "
          value={inputValue}
          onChangeText={setInputValue} />
        <NameWithInputBox name="업체명 : " />
        <NameWithInputBox name="증   상 : " />

        <ItsTimePicker />

        <View style={styles.buttonContainer}>
          <UserPressButton
            name="확인"
            color="#00BC9A"
            onPress={handleSendValue} />
          <UserPressButton
            name="취소"
            color="#4B73FF"
            onPress={handleModalFalse} />
        </View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    flex: 0.6,
    backgroundColor: '#007088',
    padding: 30,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
