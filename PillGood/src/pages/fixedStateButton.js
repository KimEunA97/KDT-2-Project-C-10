import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function FixedStateButton({ changeStyling }) {
  // 스타일링을 변경할 상태 변수
  const [containerStyle, setContainerStyle] = useState(() => styles.fixedContainer);
  const [detailContainerStyle, setDetailContainerStyle] = useState(() => styles.detailContainer);

  console.log(changeStyling)

  // changeStyling 값이 변경될 때마다 스타일링을 업데이트
  useEffect(() => {
    if (changeStyling == true) {
      // changeStyling이 true일 경우 스타일링을 변경
      setContainerStyle(styles.retakePillFixedContainer);
      setDetailContainerStyle(styles.retakePillFixedDetailContainer);
    }
    if (changeStyling == false) {
      // changeStyling이 false일 경우 기본 스타일링으로 변경
      setContainerStyle(styles.fixedContainer);
      setDetailContainerStyle(styles.detailContainer);
    }
  }, [changeStyling]);

  return (
    <View style={containerStyle}>
      <View style={detailContainerStyle}>
        <TouchableOpacity>
          <Text>약 이미지</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>남은 시간</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>확인 버튼</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fixedContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#79BFFF',
    padding: 40,
  },
  detailContainer: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  retakePillFixedContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'green',
    padding: 40,
  },
  retakePillFixedDetailContainer: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
