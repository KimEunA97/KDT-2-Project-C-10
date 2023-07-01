import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, onPress, Text, TouchableOpacity, Modal } from 'react-native';
import RenderFetchPillData from '../api/RenderFetchPillData';
import InputBox from '../api/InputBox';
import ButtonBox from '../api/button';
import { ItsDateTimePicker } from '../component/TimePicker';

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
      <TouchableOpacity onPress={pressTheCreateBtn}
        style={styles.createButton}>
      </TouchableOpacity>

      {/* 모달창 컨테이너 */}
      <Modal visible={invisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            {/* 입력칸 시작 */}

            {/* 약이름 */}
            <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center" }}>
              <Text style={styles.labelStyle}> 약이름 : </Text>
              <InputBox
                value={inputValue}
                onChange={setInputValue} />
            </View>

            {/* 업체명 */}
            <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center" }}>
              <Text style={styles.labelStyle}> 업체명 : </Text>
              <InputBox></InputBox>
            </View>

            {/* 증상 */}
            <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center" }}>
              <Text style={styles.labelStyle}> 증    상 : </Text>
              <InputBox></InputBox>
            </View>

            <View style={{ alignSelf: "center" }}>
              <ItsDateTimePicker
              ></ItsDateTimePicker>
            </View>

            <View style={styles.buttonContainer}>
              {/* 확인버튼 */}
              <TouchableOpacity
                onPress={handleSendValue}
                style={styles.confirmButton}>
                <Text style={styles.confirmText}>확인</Text>
              </TouchableOpacity>
              {/* 취소버튼 */}
              <TouchableOpacity
                onPress={handleModalFalse}
                style={styles.cancelButton}>
                <Text style={styles.cancelText}
                >취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}



const styles = StyleSheet.create({
  allAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    backgroundColor: '#007088',
    padding: 20,
    borderRadius: 10,

    width: '80%',
    height: "80%",
    alignSelf: 'center',
  },
  createButton: {
    width: '80%',
    height: '55%',
    backgroundColor: '#167286',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    padding: 5,
    margin: 0,
    alignItems: 'center'
  },

  //아래부터 모달 내부 스타일링
  labelStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  buttonContainer: {
    height: 300,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  confirmButton: {
    width: 120,
    height: '20%',
    backgroundColor: '#4B73FF',
    borderRadius: 10,
    padding: 5,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  },
  cancelButton: {
    width: 120,
    height: '20%',
    backgroundColor: '#00BC9A',
    borderRadius: 10,
    padding: 5,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  }
  // img: {
  //   //이미지 크기 조절 방식
  //   width: 40,
  //   resizeMode: 'contain',
  // }
});
