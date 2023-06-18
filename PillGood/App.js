import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import TabNavigation from './src/component/TabNavigation.js';
import FixedStateButton from './src/pages/fixedStateButton.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <StatusBar style='auto'></StatusBar>
      <View style={styles.container}>
        {/* header */}
        <TabNavigation></TabNavigation>
        {/* footer */}
        <FixedStateButton></FixedStateButton>
      </View>
    </SafeAreaProvider>
  );
}


const styles = {

  container: {
    flex: 1,
  }

}