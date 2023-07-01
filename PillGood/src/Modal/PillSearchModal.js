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
    <Modal visible={invisible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>

          {/* 입력칸 시작 */}


          <View style={styles.timePickerStyle}>
            <ItsDateTimePicker
            ></ItsDateTimePicker>
          </View>

        </View>
      </View>
    </Modal>

  )

}