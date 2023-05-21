import { SafeAreaView, StyleSheet, Text, TextInput, View, useState } from 'react-native';

import SearchBar from './componant/search.js'
import Box from './componant/Box.js';
import { StatusBar } from 'expo-status-bar';
import TextInputExample from './componant/TextInput.js';
import InfoApp from './componant/dj.js'


const App = () => {

  return (
    <View>
      <InfoApp />
    </View>
  )

}

export default App;