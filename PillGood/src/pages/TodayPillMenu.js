import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, onPress, TouchableOpacity } from 'react-native';
import RenderFetchPillData from '../api/RenderFetchPillData';
import InputBox from '../api/Input';
import ButtonBox from '../api/button';

export default function TodayPillMenu({ onTimerDone }) {
  const [inputValue, setInputValue] = useState('');
  const [pillName, setPillName] = useState('');

  const handleSendValue = () => {
    setPillName(inputValue);
  };

  return (
    <View>
      <ScrollView>
        <RenderFetchPillData pillName={pillName} />

        <InputBox value={inputValue} onChange={setInputValue} />
        <TouchableOpacity onPress={handleSendValue}
          style={styles.button}></TouchableOpacity>

      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  align: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    height: '50%',
    backgroundColor: '#167286',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    padding: 5,
    margin: 0,

    alignItems: 'center'
  },
  img: {
    //이미지 크기 조절 방식
    width: 40,
    resizeMode: 'contain',
  }
});
