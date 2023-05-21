// import { info } from "console";
// import React from "react";
// import { View, Text } from "react-native/types";


// function Contact(props) {

//   // 1. 이름, 주소, 전화번호를
//   // 2. props로 전달 받아서
//   // 3. 화면에 띄운다.
//   //4. map으로 객체 수만큼 컴포넌트를 찍어내라. 동적으로

//   const InfoComponent = ({ name, address, number }) => {
//     return (

//       <View>
//         <Text> 이름 : {name}</Text>
//         <Text> 주소 : {address}</Text>
//         <Text> 전화번호 :{number}</Text>
//       </View>

//     );
//   };

//   const InfoList = ({ info }) => {

//     return (
//       <View>
//         {info.map((item, index) => (
//           <InfoComponent
//           >
//             key = {index}
//             name = {item.name}
//             address= {item.address}
//             number={item.number}
//           </InfoComponent>
//         ))}
//       </View>
//     );
//   };

//   return <InfoList info={props.info} />;

// }

// const InfoApp = () => {

//   const info = [
//     {
//       name: '김은아',
//       address: '세종시',
//       number: "010",
//     },
//     {
//       name: '김동주',
//       address: '서울시',
//       number: "011",
//     },
//     {
//       name: '박영숙',
//       address: '대전시',
//       number: "012",
//     }
//   ];

//   return <Contact info={info} />;

// }
// export default InfoApp;

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

  const InfoList = ({ info }) => {
    return (
      <View>
        {info.map((item, index) => (
          <InfoComponent
            key={index}
            name={item.name}
            address={item.address}
            number={item.number}
          />
        ))}
      </View>
    );
  };

  return <InfoList info={props.info} />;
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

  return <Contact info={info} />;
};

export default InfoApp;
