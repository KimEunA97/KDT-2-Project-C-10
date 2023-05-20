import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import SearchBar from './componant/search.js'



export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open!@@@!!!!!@@@</Text>
    //   <StatusBar style="auto" />
    // </View>

    <SafeAreaView>
      <SearchBar />
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
