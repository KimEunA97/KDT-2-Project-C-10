import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const ItsDateTimePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={showDatePicker}
        style={styles.button}
      >
        <Text style={styles.buttonText}>시간 설정</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          style={styles.dateTimePicker}
          positiveButton={{ label: '확인', textColor: 'green' }}
          negativeButton={{ label: '취소', textColor: 'black' }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dateTimePicker: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 10,
    width: 100,
  },
  buttonText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
  },
});
