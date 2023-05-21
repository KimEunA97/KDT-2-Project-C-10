import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import SearchBar from './componant/search.js'
import Box from './componant/Box.js';
import { StatusBar } from 'expo-status-bar';
import TextInputExample from './componant/TextInput.js';



export default function App() {

  return (

    <View>
      <Box></Box>

      <TextInputExample/>
    </View>

  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
