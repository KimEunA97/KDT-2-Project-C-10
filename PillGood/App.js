import { SafeAreaView, StyleSheet, Text, TextInput, View, useState } from 'react-native';

import SearchBar from './componant/search.js'
import Box from './componant/Box.js';
import { StatusBar } from 'expo-status-bar';
import TextInputExample from './componant/TextInput.js';
import InfoApp from './componant/dj.js'
import UserFormFunction from './componant/useState.js';

const App = () => {

  return (
    <View style={styles.statusbar}>
      <StatusBar backgroundColor='yellow'></StatusBar>
      <UserFormFunction></UserFormFunction>
    </View>
    
  )

}

export default App;

const styles = StyleSheet.create({

  statusbar: {
    height: StatusBar.currentHeight,

  },

})