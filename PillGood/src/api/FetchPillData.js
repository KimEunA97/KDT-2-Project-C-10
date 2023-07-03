import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, Modal } from 'react-native';

export default function FetchPillData({ name }) {
  const [data, setData] = useState(null);
  // const [detail, setDetail] = useState(null);
  // const [symptoms, setSymptoms] = useState(null);
  // const [totalCount, setTotalCount] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPillData = async () => {
      try {

        const name = "ㅁㄴㅇ"
        const url = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=1XHlNsF6Hmgb8Wy1V%2FaTlJLpKD5korFpe6LEawoPDfjIHlM3RJSFRTgo%2BbGckpWv1t%2BS5VQj3%2FK51SWFgSq4oA%3D%3D&pageNo=1&numOfRows=3&itemName=${name}&type=json`;
        const response = await axios.get(url);
        console.log(data)
        setIsLoading(false);
        setData(response.data)
        // setTotalCount(response.data.body.totalCount);
        // setData(response.data);
        // setSymptoms(response.data.body.items[0].depositMethodQesitm);
        // setDetail(response.data.body.items[0].entpName);

      } catch (error) {
        console.error(error);
      }
    };
    fetchPillData();
  }, [name])

  if (isLoading) {

    return (
      <View>
        <Text>Loading</Text>
      </View>
    )

  }
  // else {
  //   return (
  //     <Text>{data}</Text>
  //   )
  // }

  //

  else if (data.body.totalCount === 0) {

    return (
      <Modal style={{ justifyContent: "center", alignContent: "center" }} transparent>
        <View>
          <Text style={{ backgroundColor: "white", textAlign: "center" }}>결과가 없습니다!</Text>
        </View>
      </Modal>
    )

  }

  else if (data.body.totalCount > 0) {
    const items = data.body.items;
    return (
      <View>
        {
          items.map((item, index) => {
            return <Text key={index}>{item.itemName}</Text>
          })
        }
      </View>
    )
  }
}