import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

export default function FetchPillData({ name }) {
  const [data, setData] = useState(null);
  // const [detail, setDetail] = useState(null);
  // const [symptoms, setSymptoms] = useState(null);
  // const [totalCount, setTotalCount] = useState(null);

  //인덱스 선택
  const [selectedIndex, setSelectedIndex] = useState(null);

  //로딩 표시
  const [isLoading, setIsLoading] = useState(true);
  //결과 없음창 닫기
  const [visible, setVisible] = useState(true);

  function handlevisible() {
    setVisible(false);
  }
  function handleSelectItem() {
    setSelectedIndex(index)
  }

  useEffect(() => {
    const fetchPillData = async () => {
      try {

        const name = "펜잘"
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
      <Modal visible={visible}
        style={{ justifyContent: "center", alignContent: "center" }} transparent>
        <View style={{ justifyContent: "center", alignContent: "center" }} >
          <Text
            style={{ backgroundColor: "white", textAlign: "center" }}>
            결과가 없습니다!</Text>
          <TouchableOpacity
            style={{ textAlign: "center" }}
            onPress={handlevisible}
          >확인</TouchableOpacity>
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
            return <TouchableOpacity onPress={() => handleSelectItem(index)}>
              {selectedIndex === index && <Text key={index}>{index}{item.itemName}</Text>}
            </TouchableOpacity>
          })
        }
      </View>
    )
  }
}