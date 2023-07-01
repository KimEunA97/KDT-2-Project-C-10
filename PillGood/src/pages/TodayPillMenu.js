import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, onPress, Text, TouchableOpacity, Modal } from 'react-native';
import RenderFetchPillData from '../api/RenderFetchPillData';
import InputBox from '../api/InputBox';
import ButtonBox from '../api/button';

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
            {/* 입력칸 */}
            <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center" }}>
              <Text style={styles.labelStyle}> 약 이름 : </Text>
              <InputBox
                value={inputValue}
                onChange={setInputValue}
                style={styles.inputBoxStyle} />
            </View>

            <View style={styles.buttonContainer}>
              {/* 확인버튼 */}
              <TouchableOpacity
                onPress={handleSendValue}
                style={styles.confirmButton}>
                <Text
                  style={{ color: "white" }}>확인</Text>
              </TouchableOpacity>
              {/* 취소버튼 */}
              <TouchableOpacity
                onPress={handleModalFalse}
                style={styles.confirmButton}>
                <Text
                  style={{ color: "white" }}>취소</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  modalContent: {
    backgroundColor: '#007088',
    padding: 20,
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

  // 모달 내부
  labelStyle: {
    color: "white",
    backgroundColor: "black",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  buttonContainer: {
    width: "80%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  confirmButton: {
    width: '40%',
    height: '20%',
    backgroundColor: '#167286',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    padding: 5,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // img: {
  //   //이미지 크기 조절 방식
  //   width: 40,
  //   resizeMode: 'contain',
  // }
});
