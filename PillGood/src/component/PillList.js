import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PillList = ({ list }) => {
  return (
    <View style={styles.pillList}>
      <Text style={styles.listTitle}>Pill List:</Text>
      {list.map((pill, index) => (
        <View key={index} style={styles.pillItem}>
          <Text style={styles.pillText}>{pill}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pillList: {
    marginTop: 20,
    alignItems: 'center',
  },
  listTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pillItem: {
    backgroundColor: '#007088',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  pillText: {
    color: 'white',
  },
});

export default PillList;
