import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';


import PillCreate from '../component/Pill-Create';

const CreateButton = () => {
  const [componentList, setComponentList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [modalContent, setModalContent] = useState(''); // 모달 내용을 저장할 상태 변수

  const handleConfirm = () => { 
    setComponentList([...componentList, <PillCreate key={componentList.length} content={modalContent} />]); // 입력한 내용을 PillCreate 컴포넌트에 전달
    setIsModalVisible(false);
    setShowButton(true);
    setModalContent(''); // 확인 버튼을 누른 후에 모달 내용을 초기화
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowButton(true);
    setModalContent(''); // 취소 버튼을 누른 후에 모달 내용을 초기화
  };

  const handleBtn = () => {
    setShowButton(false);
    setIsModalVisible(true);
  };

  const handleModalContentChange = (text) => {
    setModalContent(text); // 텍스트 입력 상자의 내용을 상태 변수에 저장
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
            <TextInput
              value={modalContent}
              onChangeText={handleModalContentChange}
              placeholder="내용을 입력하세요"
              style={styles.textInput}
            />
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
