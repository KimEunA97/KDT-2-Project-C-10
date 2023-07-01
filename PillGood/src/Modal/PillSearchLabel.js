
import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

import InputBox from "../api/InputBox";
import { ItsDateTimePicker } from "../component/TimePicker";


export default function PillSearchModal() {
  const [inputValue, setInputValue] = useState('');
  const [invisible, setInvisible] = useState(false)

  const handleSendValue = () => {
    setPillName(inputValue);
    setInvisible(false)
    setInputValue('');
  };
  const handleModalFalse = () => {
    setInvisible(false)
    setInputValue('');
  }

  return (
    <View>
      <View style={styles.labelStyle} >
        <Text style={styles.labelTextStyle}> 약이름 : </Text>
        <InputBox
          value={inputValue}
          onChange={setInputValue} />
      </View >

      < View style={styles.labelStyle} >
        <Text style={styles.labelTextStyle}> 업체명 : </Text>
        <InputBox></InputBox>
      </View >

      < View style={styles.labelStyle} >
        <Text style={styles.labelTextStyle}> 증    상 : </Text>
        <InputBox></InputBox>
      </View >

      <View style={styles.timePickerStyle}>
        <ItsDateTimePicker
        ></ItsDateTimePicker>
      </View>
    </View>
  )
}