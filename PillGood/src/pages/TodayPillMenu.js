import React, { useState } from 'react';
import { View, Text, Button, Touchable, TouchableOpacity } from 'react-native';

import PillCreate from '../component/pillCreate';


const ComponentButton = () => {
  const [componentList, setComponentList] = useState([]);

  const handleClick = () => {
    setComponentList([...componentList, <PillCreate key={componentList.length} />]);
  };

  return (
    <View styel={styles.container}>
      <TouchableOpacity title="버튼" onPress={handleClick} style={styles.button} />
      {componentList.map((component, index) => (
        <View key={index}>{component}</View>
      ))}
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  button: {

    width: 200,
    height: 100,

    backgroundColor: "#55B0AA",
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: 2,
    borderColor: "black "

  }

}


export default ComponentButton;