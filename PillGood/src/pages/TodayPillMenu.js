import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import PillCreate from '../component/PillCreate';

const CreateButton = () => {
  const [componentList, setComponentList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleConfirm = () => {
    setComponentList([...componentList, <PillCreate key={componentList.length} />]);
    setIsModalVisible(false);
    setShowButton(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowButton(true);
  };

  const handleBtn = () => {
    setShowButton(false);
    setIsModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {showButton && (
        <TouchableOpacity onPress={handleBtn} style={styles.button}>
          <Text style={styles.buttonText}>버튼</Text>
        </TouchableOpacity>
      )}

      {isModalVisible && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>모달 내용</Text>
            <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
              <Text style={styles.buttonText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {componentList.map((component, index) => (
        <View key={index}>{component}</View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  button: {
    backgroundColor: '#55B0AA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#55B0AA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: '#C94A4A',
    padding: 10,
    borderRadius: 5,
  },
});

export default CreateButton;
