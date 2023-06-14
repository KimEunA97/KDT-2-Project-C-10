import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TodayModal from '../component/TodayModal';
import PillList from '../component/PillList';

export default function TodayPillMenu() {
  const [visible, setVisible] = useState(false);
  const [pillList, setPillList] = useState([]);

  const modalVisible = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const addPill = (pill) => {
    setPillList([...pillList, pill]);
  };

  return (
    <View style={styles.align}>
      {pillList.length === 0 && (
        <TouchableOpacity style={styles.border} onPress={modalVisible}>
          <Text>보이기</Text>
        </TouchableOpacity>
      )}

      <TodayModal visible={visible} onClose={closeModal} onAddPill={addPill} />

      <PillList list={pillList} />
    </View>
  );
}

const styles = StyleSheet.create({
  align: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    width: '80%',
    height: '50%',
    backgroundColor: '#336B66',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    padding: 5,
    margin: 0,
  },
});
