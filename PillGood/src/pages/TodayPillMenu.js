import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';

import PillCreate from '../component/Pill-Create';

const CreateButton = () => {
  const [componentList, setComponentList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleConfirm = () => {
    const newPill = (
      <PillCreate
        key={componentList.length}
        name={name}
        company={company}
        symptoms={symptoms}
      />
    );
    setComponentList([...componentList, newPill]);
    setIsModalVisible(false);
    setShowButton(true);
    setName('');
    setCompany('');
    setSymptoms('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowButton(true);
    setName('');
    setCompany('');
    setSymptoms('');
  };

  const handleBtn = () => {
    setShowButton(false);
    setIsModalVisible(true);
  };

  return (
    // Modal creation button
    <ScrollView contentContainerStyle={styles.container}>
      {showButton && (
        <TouchableOpacity onPress={handleBtn} style={styles.button}>
          <Text style={styles.buttonText}>Create Button</Text>
        </TouchableOpacity>
      )}

      {/* Modal */}
      {isModalVisible && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Pill Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter name"
              style={styles.textInput}
            />

            <Text style={styles.modalText}>Company</Text>
            <TextInput
              value={company}
              onChangeText={setCompany}
              placeholder="Enter company"
              style={styles.textInput}
            />

            <Text style={styles.modalText}>Symptoms</Text>
            <TextInput
              value={symptoms}
              onChangeText={setSymptoms}
              placeholder="Enter symptoms"
              style={styles.textInput}
            />

            <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
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
  textInput: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
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
