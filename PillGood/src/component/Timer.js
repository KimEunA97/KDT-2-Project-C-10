import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import Alarm from './Alarm';

const Timer = ({ timerValue }) => {
  const [remainingTime, setRemainingTime] = useState(timerValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); // 의존성 배열을 빈 배열([])로 변경합니다.

  useEffect(() => {
    if (remainingTime <= 0) {
      // remainingTime이 0보다 작거나 같을 때 Alarm 컴포넌트를 렌더링합니다.
      Alarm();
    }
  }, [remainingTime]); // remainingTime이 변경될 때마다 useEffect가 작동하도록 의존성 배열을 추가합니다.

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 1000 / 60) % 60;
    const hours = Math.floor(time / 1000 / 60 / 60);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>;
};

const styles = StyleSheet.create({
  timerText: {
    color: 'white',
  },
});

export default Timer;
