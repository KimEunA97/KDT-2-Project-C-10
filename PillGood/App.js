import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import SearchBar from './componant/search.js'
import Box from './componant/Box.js';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  return (

    <View style={{ paddingTop: 0 }}>
      <StatusBar/>
      <Box rounded="true"></Box>
    </View>

  );
}

