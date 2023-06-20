import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const Timer = ({ timerValue }) => {
  
  //Date.now()는 현재 시간을 밀리초(millisecond)로 반환. 현재 시간을 나타냄.
  // setCurrentTime(Date.now())와 같이 사용하면 currentTime 상태가 현재 시간으로 업데이트됨.
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (timerValue) => {
    if (timerValue <= 0) {
      return "Expired";
    }
  
    const remainingTime = Math.max(0, timerValue - currentTime);
    const seconds = Math.floor(remainingTime / 1000) % 60;
    const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
    const hours = Math.floor(remainingTime / 1000 / 60 / 60);
  
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  //요소 그룹화
  return <Text>{formatTime(timerValue)}</Text>;
};

export default Timer;
