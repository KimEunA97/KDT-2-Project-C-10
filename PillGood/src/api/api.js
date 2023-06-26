import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const FetchAPIData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API 호출
    const pillName = "일동제약"
    const hex = encodeURIComponent(pillName);
    console.log(hex)
    const url = 'https://apis.data.go.kr/1471000/MdcinGrnIdntfcInfoService01/getMdcinGrnIdntfcInfoList01?serviceKey=IGgBVJ%2BLESbzNUr3Zgld1TwbaTgjXjyTynsCnEDUeuwNeQbN7wrVenFaMf%2Bu%2FfDDDE0G4voIAFzA%2Fw9s37mTmw%3D%3D&pageNo=1&numOfRows=3&ENTP_NAME= ' + hex + '&type=json'
    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {data ? (
        <Text>{JSON.stringify(data.body.items[1])}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default FetchAPIData;
