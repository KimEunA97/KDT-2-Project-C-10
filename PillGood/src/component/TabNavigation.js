import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import TodayPillMenu from './src/pages/TodayPillMenu.js';
import ViewAllMenu from './src/pages/ViewAllMenu.js';
import SearchMenu from './src/pages/SettingMenu.js';
import SettingMenu from './src/pages/SettingMenu.js';

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
    <View style={styles.menuButton}>
      <View>
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
  },
  menuButtonText: {
    color: 'white',
  },
};


export default TabNavigation;
