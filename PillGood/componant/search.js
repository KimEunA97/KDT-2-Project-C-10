import React from 'react';
import { View, Text } from 'react-native'

function SearchBar(props) {

  return (
    <View>
      <Text>
        안녕하세요 함수 {props.name}
      </Text>
      <Text>Hey</Text>
    </View>
  )

}

SearchBar.defaultProps = {

  name: "OMG",

}



export default SearchBar;