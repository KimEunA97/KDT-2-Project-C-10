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
  }, []);
 
  useEffect(() => {
    if (remainingTime <= 0) {
      // remainingTime이 0보다 작거나 같을 때 Alarm 컴포넌트를 렌더링합니다.
      // 올바른 형태로 수정: JSX로 Alarm 컴포넌트를 렌더링합니다.
      return <Alarm />;
    }
  }, [remainingTime]);

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
