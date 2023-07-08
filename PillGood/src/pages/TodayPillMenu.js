import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import RenderFetchPillData from '../api/RenderFetchPillData';
import ListCreateButton from '../component/ListCreateButton';
import SearchingModal from '../Modal/SearchingModal'
import FetchPillData from '../api/FetchPillData';

export default function TodayPillMenu() {
  const [inputValue, setInputValue] = useState('');
  const [pillName, setPillName] = useState('');
  const [invisible, setInvisible] = useState(false);

  const handleSendValue = () => {
    setPillName(inputValue);
    setInvisible(false);
    setInputValue('');
  };

  const handleModalFalse = () => {
    setInvisible(false);
    setInputValue('');
  };

  const pressTheCreateBtn = () => {
    setInvisible(true);
  };

  return (
    <View style={styles.allAlign}>
      {/* 약정보 렌더링 */}
      <FetchPillData name={pillName} />

      {/* Create 버튼 */}
      <ListCreateButton onPress={pressTheCreateBtn} />

      {/* 모달창 컨테이너 */}
      <Modal visible={invisible} transparent>

      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  allAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
