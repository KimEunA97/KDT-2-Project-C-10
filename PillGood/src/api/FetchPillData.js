import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import axios from 'axios';

function FetchPillData({ name }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API 호출
    const fetchPillData = async () => {
      try {
        const pillName = name;
        const url = `https://apis.data.go.kr/1471000/MdcinGrnIdntfcInfoService01/getMdcinGrnIdntfcInfoList01?serviceKey=IGgBVJ%2BLESbzNUr3Zgld1TwbaTgjXjyTynsCnEDUeuwNeQbN7wrVenFaMf%2Bu%2FfDDDE0G4voIAFzA%2Fw9s37mTmw%3D%3D&pageNo=1&numOfRows=3&ITEM_NAME=${pillName}&type=json`;
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (name) {
      fetchPillData();
    }
  }, [name]);

  const itemName = data ? data.body.items[0].ITEM_NAME : null;

  return (
    <View>
      {itemName ? (
        <View>
          <Text style={styles.textColor}>제품명</Text>
          <TextInput style={styles.input}>{itemName}</TextInput>
        </View>
      ) : (
        <View>
          <Text style={styles.textColor}>제품명</Text>
          <TextInput
            style={styles.input}
            placeholder='제품명'></TextInput>
        </View>
      )}
    </View>
  );
}

export default FetchPillData;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  textColor: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
});
