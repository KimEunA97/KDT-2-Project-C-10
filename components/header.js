import React from "react";
import { FlatList, ScrollView, SectionList, SafeAreaView, StyleSheet, StatusBar, Text, View } from "react-native";


const DATA = [
  {
    data: ['오늘의 약','타임라인','검색','설정'],
  },
];

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#55b0aa',
    display: 'flex',
    flexDirection : "row",
    
  },
  item: {
    textAlign : "center",
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

function HeaderPage() {

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  )
}

export default HeaderPage;