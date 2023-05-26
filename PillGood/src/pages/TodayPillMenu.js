import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import pillCreate from '../component/pillCreate';


const ComponentButton = () => {
  const [componentList, setComponentList] = useState([]);

  const handleClick = () => {
    setComponentList([...componentList, <pillCreate key={componentList.length} />]);
  };

  return (
    <View>
      <Button title="버튼" onPress={handleClick} />
      {componentList.map((component, index) => (
        <View key={index}>{component}</View>
      ))}
    </View>
  );
}

export default ComponentButton;