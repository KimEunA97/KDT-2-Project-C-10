import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PillCreate = ({ content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    color: '#333',
    fontSize: 16,
  },
});

export default PillCreate;
