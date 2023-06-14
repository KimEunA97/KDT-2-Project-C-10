import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodayModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>내용</Text>

          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={onClose}>
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
    backgroundColor: 'yellow',
    padding: 20,
    borderRadius: 4,
    width: '80%',
    alignSelf: 'center',
  },
  btnContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default TodayModal;
