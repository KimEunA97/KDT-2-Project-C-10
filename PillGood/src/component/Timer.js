import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Modal, View, TouchableOpacity, TextInput } from 'react-native';

const Timer = ({ timerValue }) => {
  const defaultTimerValue = { hours: 0, minutes: 0, seconds: 0 };
  const [remainingTime, setRemainingTime] = useState(timerValue || defaultTimerValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(interval);
          return prevTime;
        }

        const updatedTime = { ...prevTime };

        if (updatedTime.seconds > 0) {
          updatedTime.seconds--;
        } else {
          if (updatedTime.minutes > 0) {
            updatedTime.minutes--;
            updatedTime.seconds = 59;
          } else {
            if (updatedTime.hours > 0) {
              updatedTime.hours--;
              updatedTime.minutes = 59;
              updatedTime.seconds = 59;
            }
          }
        }

        return updatedTime;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    const hours = time.hours.toString().padStart(2, '0');
    const minutes = time.minutes.toString().padStart(2, '0');
    const seconds = time.seconds.toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Text style={styles.timerText}>
      {formatTime(remainingTime)}
    </Text>
  );
};



const styles = StyleSheet.create({
  timerText: {
    color: 'white',
  },
});

export default Timer