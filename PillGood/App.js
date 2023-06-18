import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Constants, statusBarHeight } from 'expo-constants';


import TabNavigation from './src/component/TabNavigation.js';
import FixedStateButton from './src/pages/fixedStateButton.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <View style={{ flex: 1, }}>
          <StatusBar style='dark'></StatusBar>
          {/* header */}
          <TabNavigation></TabNavigation>
          {/* footer */}
          <FixedStateButton></FixedStateButton>
        </View>
      </SafeAreaView>
    </SafeAreaProvider >
  );
}


// const styles = {

//   container: {
//     flex: 1,
//   }

// }