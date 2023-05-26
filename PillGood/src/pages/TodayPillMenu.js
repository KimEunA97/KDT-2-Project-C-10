import React, { useState } from 'react';
import { View, Text, Touchable } from 'react-native';

import pillCreate from '../component/pillCreate';


const ComponentButton = () => {
  const [componentList, setComponentList] = useState([]);

  const handleClick = () => {
    setComponentList([...componentList, <pillCreate key={componentList.length} />]);
  };

  return (
    <View>
      <button onClick={handleClick}>버튼</button>
      {componentList.map((component, index) => (
        <View key={index}>{component}</View>
      ))}
    </View>
  );
}

export default ComponentButton;