import React from "react";
import { View, Text } from "react-native";

function Contact(props) {

  // 1. 이름, 주소, 전화번호를
  // 2. props로 전달 받아서
  // 3. 화면에 띄운다.
  // 4. map으로 객체 수만큼 컴포넌트를 찍어내라. 동적으로

  const InfoComponent = ({ name, address, number }) => {
    return (
      <View>
        <Text>이름: {name}</Text>
        <Text>주소: {address}</Text>
        <Text>전화번호: {number}</Text>
      </View>
    );
  };

  const InfoList = ({ abc }) => {
    return (
      <View>
        {abc.map((item, index) => (
          <InfoComponent
          // 객체 베열을 순회하기 위해 index를 써야 한다. key의 자체 이름을 수정하는 것은 권장하지 않는다.
            key={index}
            name={item.name}
            address={item.address}
            number={item.number}
          />
        ))}
      </View>
    );
  };
  return <InfoList abc={props.abc} />;
}

const InfoApp = () => {
  const info = [
    {
      name: '김은아',
      address: '세종시',
      number: "010",
    },
    {
      name: '김동주',
      address: '서울시',
      number: "011",
    },
    {
      name: '박영숙',
      address: '대전시',
      number: "012",
    }
  ];

  //첫번째 info는 속성이름이라서 Contact() 함수로 넘길 때
  //info={info}를 abc={info}로 바꿔서 넘기면
  //props.abc로 객체 info에 접근이 가능하다.
  //속성 이름 = 값(객체 등)
  return <Contact abc={info} />;
};

export default InfoApp;
