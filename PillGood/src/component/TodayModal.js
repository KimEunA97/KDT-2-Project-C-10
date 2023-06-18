import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const TodayModal = ({ visible, onClose, onAddPill }) => {
  const [pillName, setPillName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handlePillNameChange = (text) => {
    setPillName(text);
  };

  const handleCompanyNameChange = (text) => {
    setCompanyName(text);
  };

  const handleSymptomsChange = (text) => {
    setSymptoms(text);
  };

  const handleConfirm = () => {
    if (pillName || companyName || symptoms) {
      const pill = {
        pillName : pillName,
        companyName : companyName,
        symptoms : symptoms,
      }
      onAddPill(pill);
      setPillName('');
      setCompanyName('');
      setSymptoms('');
    }
    onClose();
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.textColor}>제품명</Text>
          <TextInput
            style={styles.input}
            placeholder="제품명"
            value={pillName}
            onChangeText={handlePillNameChange}
          />

          <Text style={styles.textColor}>업체명</Text>
          <TextInput
            style={styles.input}
            placeholder="업체명"
            value={companyName}
            onChangeText={handleCompanyNameChange}
          />

          <Text style={styles.textColor}>증 상</Text>
          <TextInput
            style={styles.input}
            placeholder="증 상"
            value={symptoms}
            onChangeText={handleSymptomsChange}
          />

          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleConfirm} style={styles.createBtn}>
              <Text style={styles.textColor}>추가</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose} style={styles.cancelBtn}>
              <Text style={styles.textColor}>취소</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#007088',
    padding: 20,
    borderRadius: 4,
    width: '80%',
    height : "80%",
    alignSelf: 'center',
  },
  textColor: {
    color: 'white',
    textAlign: 'center',
    fontSize : 30,
  },
  input: {
    borderWidth: 1,
    backgroundColor : "white",
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    fontSize : 20,
    textAlign : "center"
  },
  btnContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
  },
  createBtn: {
    width: '40%',
    backgroundColor: '#4B73FF',
  },
  cancelBtn: {
    width: '40%',
    backgroundColor: '#00BC9A',
  },
});

export default TodayModal;
