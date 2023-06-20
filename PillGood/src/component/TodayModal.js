import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const TodayModal = ({ visible, onClose, onAddPill }) => {
  const [pillName, setPillName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const handlePillNameChange = (text) => {
    setPillName(text);
  };

  const handleCompanyNameChange = (text) => {
    setCompanyName(text);
  };

  const handleSymptomsChange = (text) => {
    setSymptoms(text);
  };

  const handleHoursChange = (text) => {
    setHours(text);
  };

  const handleMinutesChange = (text) => {
    setMinutes(text);
  };

  const handleSecondsChange = (text) => {
    setSeconds(text);
  };

  const handleConfirm = () => {
    setPillName('');
    setCompanyName('');
    setSymptoms('');
    setHours('');
    setMinutes('');
    setSeconds('');

    if (pillName || companyName || symptoms || hours || minutes || seconds) {
      const pill = {
        pillName: pillName,
        companyName: companyName,
        symptoms: symptoms,
        timer: {
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        },
      };
      onAddPill(pill);
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

          <View style={styles.timeInputContainer}>
            <View style={styles.timeInput}>
              <Text style={styles.textColor}>시</Text>
              <TextInput
                style={styles.timeTextInput}
                placeholder="시"
                value={hours}
                onChangeText={handleHoursChange}
              />
            </View>

            <View style={styles.timeInput}>
              <Text style={styles.textColor}>분</Text>
              <TextInput
                style={styles.timeTextInput}
                placeholder="분"
                value={minutes}
                onChangeText={handleMinutesChange}
              />
            </View>

            <View style={styles.timeInput}>
              <Text style={styles.textColor}>초</Text>
              <TextInput
                style={styles.timeTextInput}
                placeholder="초"
                value={seconds}
                onChangeText={handleSecondsChange}
              />
            </View>
          </View>

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
    height: '80%',
    alignSelf: 'center',
  },
  textColor: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  timeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  timeInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  timeTextInput: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  btnContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
  },
  createBtn: {
    width: '45%',
    backgroundColor: '#4B73FF',
    borderRadius: 5,
  },
  cancelBtn: {
    width: '45%',
    backgroundColor: '#00BC9A',
    borderRadius: 5,
  },
});

export default TodayModal;
