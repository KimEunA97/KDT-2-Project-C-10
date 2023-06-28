import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import TodayModal from '../component/TodayModal';
import PillList from '../component/PillList';
import RenderFetchPillData from '../api/RenderFetchPillData';
import InputBox from '../api/Input';
import ButtonBox from '../api/button';

export default function TodayPillMenu({ onTimerDone }) {
  // const [visible, setVisible] = useState(false);
  // const [pillList, setPillList] = useState([]);

  // const modalVisible = () => {
  //   setVisible(true);
  // };

  // const closeModal = () => {
  //   setVisible(false);
  // };

  // const addPill = (pill) => {
  //   console.log(pill)
  //   setPillList([...pillList, pill]);
  // };
  const [inputValue, setInputValue] = useState('');
  const [pillName, setPilName] = useState('');
  
  function handleSendValue(pillName) {
    setPilName(pillName);
  }

  return (
    // <View style={styles.align}>
    //   {pillList.length === 0 && (
    //     <TouchableOpacity style={styles.button} onPress={modalVisible}>
    //       <Image source={require('../img/plusMark.png')} style={styles.img}></Image>
    //     </TouchableOpacity>
    //   )}

    //   <TodayModal visible={visible} onClose={closeModal} onAddPill={addPill} />

    //   <PillList list={pillList} onTimerDone={onTimerDone} />

    // </View>

    <View>
      <ScrollView>

        {/* 전달 잘 됨. */}
        <RenderFetchPillData pillName={pillName} />
        {/* ㅁㄴㅇ */}
        <InputBox value={inputValue} onChange={setInputValue}></InputBox>
        {/* ㅁㄴㅇ */}
        <ButtonBox onClick={()=>handleSendValue(pillName)}></ButtonBox>

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
