import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, Modal } from 'react-native';
import ModalBox from '../component/modalBox';

export default function TodayPillMenu() {

  const [modalVisible, setModalVisible] = useState(false)

  const modalOpen = () => {
    setModalVisible(true)
  }

  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={modalOpen}>
        <Text>누르면 모달 나와요</Text>
      </TouchableOpacity>
      <ModalBox visible={modalVisible}></ModalBox>
    </View>

  )

}

const styles = {

  container: {

    alignItems: "center",

  }

}