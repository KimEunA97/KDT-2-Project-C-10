import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

export default function FetchPillData({ name }) {
  const [data, setData] = useState(null);
  const [detail, setDetail] = useState(null);
  const [symptoms, setSymptoms] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPillData = async () => {
      try {
        const url = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=1XHlNsF6Hmgb8Wy1V%2FaTlJLpKD5korFpe6LEawoPDfjIHlM3RJSFRTgo%2BbGckpWv1t%2BS5VQj3%2FK51SWFgSq4oA%3D%3D&pageNo=1&numOfRows=3&itemName=${name}&type=json`;
        const response = await axios.get(url);
        setIsLoading(false);
        setData(response.data.body.items[0].itemName);
        setSymptoms(response.data.body.items[0].depositMethodQesitm);
        setDetail(response.data.body.items[0].entpName);

      } catch (error) {
        console.error(error);
      }
    };

    if (name) {
      fetchPillData();
    }
  }, [name]);




  if (isLoading) {
    return
  }
  else {
    return (
      <View style={styles.container}>

        <View style={styles.textContainer}>
          <Text style={styles.blue}>약 이름 : </Text>
          <Text style={styles.blue}>{data}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.yellow}>보관법  : </Text>
          <Text style={styles.yellow}>{symptoms}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.red}>업체명 : </Text>
          <Text style={styles.red}>{detail}</Text>
        </View>

      </View>
    );
  }
}

const styles = {
  container: {
    width: "80%",
    backgroundColor: "gray",
    borderWidth: 1,
    margin: 20,
    justifyContent : "center",
    alignItem : "center"
  },
  textContainer: {
    flexDirection: "row"
  },
  red: {
    color: "red",
    borderWidth: 1,
    borderColor: "red"
  },
  blue: {
    color: "blue",
    borderWidth: 1,
    borderColor: "blue"
  },
  yellow: {
    color: "yellow",
    borderWidth: 1,
    borderColor: "yellow"
  }
}