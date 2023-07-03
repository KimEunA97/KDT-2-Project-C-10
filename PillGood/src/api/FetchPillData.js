import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

import UserPressButton from '../Modal/UserPressButton';
import SearchingModal from '../Modal/SearchingModal';
import NameWithInputBox from '../Modal/NameWithInputBox';
import TextInputWithPillInfo from '../Modal/TextInputFlexableSize';

export default function FetchPillData({ name }) {
  const [data, setData] = useState(null);
  // const [detail, setDetail] = useState(null);
  // const [symptoms, setSymptoms] = useState(null);
  // const [totalCount, setTotalCount] = useState(null);

  //인덱스 선택. null은 어떤 아이템도 선택 안한 상태
  const [selectedIndex, setSelectedIndex] = useState(null);
  //로딩 표시
  const [isLoading, setIsLoading] = useState(true);
  //결과 없음창 닫기
  const [visible, setVisible] = useState(true);

  function handlevisible() {
    setVisible(false);
  }
  function handleSelectItem(index) {
    console.log(index)
    setSelectedIndex(index)
  }

  useEffect(() => {
    const fetchPillData = async () => {
      try {

        const name = "난타코프"
        const url = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=1XHlNsF6Hmgb8Wy1V%2FaTlJLpKD5korFpe6LEawoPDfjIHlM3RJSFRTgo%2BbGckpWv1t%2BS5VQj3%2FK51SWFgSq4oA%3D%3D&pageNo=1&numOfRows=3&itemName=${name}&type=json`;
        const response = await axios.get(url);
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


  //결과가 없을 때
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

  //결과가 1개일 때
  else if (data.body.totalCount === 1) {

    const itemname = data.body.items[0].itemName;
    const entpname = data.body.items[0].entpname;
    const seQesitm = data.body.items[0].seQesitm;

    return (

      <Modal transparent>
        <View style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }} >
          <TextInputWithPillInfo
            name="약이름 : "
            value={itemname}
            onChangeText={itemname} />
          <TextInputWithPillInfo
            name="업체명 : "
            value={entpname}
            onChangeText={entpname} />
          <TextInputWithPillInfo
            name="증   상 : "
            value={seQesitm}
            onChangeText={seQesitm} />
        </View>
      </Modal>




    )

  }

  //결과가 2개 이상일 때
  else if (data.body.totalCount > 1) {
    const items = data.body.items;
    return (
      <Modal transparent>
        <View style={{ flex: 1 }}>
          {items.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => handleSelectItem(index)}>
                <Text>{item.itemName}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

      </Modal>

    );
  }
}