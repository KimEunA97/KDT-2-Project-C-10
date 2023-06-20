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
      setRemainingTime(0); // remainingTime을 0으로 설정하여 타이머가 멈추도록 합니다.
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
