import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import TodayPillMenu from '../pages/TodayPillMenu';
import ViewAllMenu from '../pages/ViewAllMenu';
import SearchMenu from '../pages/SearchMenu';
import SettingMenu from '../pages/SettingMenu';
import { StatusBar } from 'expo-status-bar';


const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('TodayPillMenu');

  const renderScreen = () => {
    switch (activeTab) {
      case 'TodayPillMenu':
        return <TodayPillMenu />;
      case 'ViewAllMenu':
        return <ViewAllMenu />;
      case 'SearchMenu':
        return <SearchMenu />;
      case 'SettingMenu':
        return <SettingMenu />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.align}>
      <View style={styles.menuButton}>
        <TouchableOpacity onPress={() => setActiveTab('TodayPillMenu')}>
          <Text style={styles.menuButtonText}>오늘의약</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('ViewAllMenu')}>
          <Text style={styles.menuButtonText}>전체보기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('SearchMenu')}>
          <Text style={styles.menuButtonText}>검색</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('SettingMenu')}>
          <Text style={styles.menuButtonText}>설정</Text>
        </TouchableOpacity>
      </View>
      {renderScreen()}
    </View>
  );
};


const styles = {
  menuButton: {
    backgroundColor: '#55B0AA',
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  menuButtonText: {
    color: 'white',
  },
};


export default TabNavigation;
