import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const TodayModal = ({ visible, onClose, onAddPill }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleConfirm = () => {
    if (inputValue) {
      onAddPill(inputValue);
      setInputValue('');
    }
    onClose();
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>내용</Text>

          <TextInput
            style={styles.input}
            placeholder="값을 입력하세요"
            value={inputValue}
            onChangeText={handleInputChange}
          />

          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleConfirm}>
              <Text>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경 적용
  },
  modalContent: {
    backgroundColor: '#007088',
    padding: 20,
    borderRadius: 4,
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
  },
  btnContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default TodayModal;
