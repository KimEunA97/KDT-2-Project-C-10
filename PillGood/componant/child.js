import React from 'react';
import { View } from 'react-native/types';

const ChildComponent = (props) => {
  return (
    <View>
      <Text>Hello, {props.name}!</Text>
    </View>
  );
};

export default ChildComponent;