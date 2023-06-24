import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';


import TabNavigation from './src/component/TabNavigation.js';
import FixedStateButton from './src/pages/fixedStateButton.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [timerDone, setTimerDone] = useState(false);
  const handleTimerDone = () => {
    setTimerDone(timerDone);

  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <View style={{ flex: 1, }}>
          {/* header */}
          <TabNavigation onTimerDone={handleTimerDone}></TabNavigation>
          {/* footer */}
          <FixedStateButton changeStyling={setTimerDone}></FixedStateButton>
        </View>
      </SafeAreaView>
    </SafeAreaProvider >
  );
}

