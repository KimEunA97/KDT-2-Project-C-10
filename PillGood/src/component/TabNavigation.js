import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import AboutScreen from './src/pages/ViewAllMenu.js';
import HomeScreen from './src/pages/HomeScreen.js';
import SettingsScreen from './src/pages/SettingMenu.js';
import ProfileScreen from './src/pages/SettingMenu.js';
import { StatusBar } from 'expo-status-bar';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('TodayPillMenu');

  const renderScreen = () => {
    switch (activeTab) {
      case 'TodayPillMenu':
        return <HomeScreen />;
      case 'ViewAllMenu':
        return <AboutScreen />;
      case 'SearchMenu':
        return <SettingsScreen />;
      case 'SettingMenu':
        return <ProfileScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 16 }}>
        <TouchableOpacity onPress={() => setActiveTab('TodayPillMenu')}>
          <Text>오늘의약</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('ViewAllMenu')}>
          <Text>전체보기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('SearchMenu')}>
          <Text>검색</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('SettingMenu')}>
          <Text>설정</Text>
        </TouchableOpacity>
      </View>
      {renderScreen()}
    </View>
  );
};

export default TabNavigation;
