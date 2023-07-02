import React, { useState } from 'react';
import { View, Image, ScrollView, StyleSheet, onPress, Text, TouchableOpacity, Modal } from 'react-native';
import RenderFetchPillData from '../api/RenderFetchPillData';
import { ItsDateTimePicker } from '../component/TimePicker';
import NameWithInputBox from '../Modal/NameWithInputBox'
import UserPressButton from '../Modal/UserPressButton';
import ListCreateButton from '../component/ListCreateButton';
import ItsTimePicker from '../Modal/ItsTimePicker';

export default function TodayPillMenu({ }) {
  const [inputValue, setInputValue] = useState('');
  const [pillName, setPillName] = useState('');
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
  const pressTheCreateBtn = () => {
    setInvisible(true)
  }

  return (
    <View style={styles.allAlign}>
      {/* 약정보 렌더링 */}
      <RenderFetchPillData pillName={pillName} />

      {/* Create 버튼 */}
      <ListCreateButton onPress={pressTheCreateBtn} />

      {/* 모달창 컨테이너 */}
      <Modal visible={invisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <NameWithInputBox name="약이름 : " />
            <NameWithInputBox name="업체명 : " />
            <NameWithInputBox name="증   상 : " />

            <ItsTimePicker />

            <View style={styles.buttonContainer}>
              <UserPressButton
                name="확인"
                color="#00BC9A"
                onPress={handleSendValue} />
              <UserPressButton
                name="취소"
                color="#4B73FF"
                onPress={handleModalFalse} />
            </View>

          </View>
        </View>
      </Modal>

    </View >
  );
}



const styles = StyleSheet.create({
  allAlign: {
    alignItems: 'center',
    justifyContent: 'center',

  },


  //모달 스타일링
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    flex: 0.6,
    backgroundColor: '#007088',
    padding: 30,
    borderRadius: 10,
  },



  //아래부터 모달 내부 스타일링

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  // confirmButton: {
  //   width: 120,
  //   backgroundColor: '#4B73FF',
  //   borderRadius: 10,
  //   padding: 5,
  //   margin: 0,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // confirmText: {
  //   fontSize: 30,
  //   color: "white",
  //   fontWeight: "bold"
  // },
  // cancelButton: {
  //   width: 120,
  //   backgroundColor: '#00BC9A',
  //   borderRadius: 10,
  //   padding: 5,
  //   margin: 0,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // cancelText: {
  //   fontSize: 30,
  //   color: "white",
  //   fontWeight: "bold"
  // },
  // timePickerStyle: {
  //   alignItems: "center",
  //   marginTop: 25,

  // }

});
