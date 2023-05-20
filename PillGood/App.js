import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import SearchBar from './componant/search.js'
import Box from './componant/Box.js';



export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open!@@@!!!!!@@@</Text>
    //   <StatusBar style="auto" />
    // </View>
      <SafeAreaView>
        {/* <SearchBar styles={[styles.container, styles.box]} /> */}
        <Box></Box>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: "100px",
    height: "100px",
    backgroundColor: '#fff',
    borderRadius: 16,

  },
});
