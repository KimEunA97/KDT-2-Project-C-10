import React from 'react';
import { View, Text } from 'react-native';

const ChildComponent = (props) => {
  return (
      <Text>Hello, {props.name}!</Text>
  );
};

export default ChildComponent;