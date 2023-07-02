import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import RenderFetchPillData from '../api/RenderFetchPillData';
import ListCreateButton from '../component/ListCreateButton';
import SearchingModal from '../Modal/SearchingModal'
import FetchPillData from '../api/FetchPillData';
import ThenSearchModal from '../Modal/SearchModal/ThenSearchModal';

export default function TodayPillMenu() {
  const [inputValue, setInputValue] = useState('');
  const [pillName, setPillName] = useState('');
  const [invisible, setInvisible] = useState(false);

  // 검색용 모달창 상태 관리
  const [searchInvisible, setSearchInvisible] = useState(false)

  const handleSendValue = () => {
    setPillName(inputValue);
    setInvisible(false);
    setInputValue('');
    setSearchInvisible(false)
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

      <FetchPillData pillName={pillName} />

      {/* Create 버튼 */}
      <ListCreateButton onPress={pressTheCreateBtn} />

      {/* 모달창 컨테이너 */}
      <Modal visible={invisible} transparent>
        <SearchingModal
          handleSendValue={handleSendValue}
          handleModalFalse={handleModalFalse}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </Modal>
      {searchInvisible && (
        <ThenSearchModal onClose={() => setSearchInvisible(false)} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  allAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
