import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';


import TabNavigation from './src/component/TabNavigation.js';
import FixedStateButton from './src/pages/fixedStateButton.js';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* header */}
          <TabNavigation></TabNavigation>
          {/* footer */}
          <FixedStateButton></FixedStateButton>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = {

  container: {
    flex: 1,
  }

}