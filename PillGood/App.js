import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';


import TabNavigation from './src/component/TabNavigation.js';
import FixedStateButton from './src/pages/fixedStateButton.js';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <View style={styles.container}>
      {/* header */}
      <StatusBar style='blue'></StatusBar>
      <TabNavigation></TabNavigation>
      {/* footer */}
      <FixedStateButton></FixedStateButton>
    </View>

  );
}


const styles = {

  container: {
    flex: 1,
  }

}