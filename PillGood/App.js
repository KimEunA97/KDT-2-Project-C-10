import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';


import TabNavigation from './src/component/TabNavigation.js';
import DropdownMenu from './src/component/pullDown.js';
import FixedStateButton from './src/pages/fixedStateButton.js';

export default function App() {

  return (
    <View style={styles.container}>
      <TabNavigation></TabNavigation>
      <FixedStateButton></FixedStateButton>
    </View>

  );
}


const styles = {

  container: {
    flex: 1,
  }

}