import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, Modal } from 'react-native';
import ModalBox from '../component/modalBox';

export default function TodayPillMenu() {

  return (

    <View style={styles.container}>
      <ModalBox></ModalBox>
    </View>

  )

}

const styles = {

  container: {

    alignItems : "center",

  }

}