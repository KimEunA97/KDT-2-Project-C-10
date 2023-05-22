import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import AboutScreen from './src/pages/AboutScreen.js';
import HomeScreen from './src/pages/HomeScreen.js';
import SettingsScreen from './src/pages/SettingsScreen.js';
import ProfileScreen from './src/pages/ProfileScreen.js';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'about':
        return <AboutScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={{ paddingTop : 500, backgroundColor : 'yellow'}}></StatusBar>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 16 }}>
        <TouchableOpacity onPress={() => setActiveTab('home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('about')}>
          <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('settings')}>
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
      {renderScreen()}
    </View>
  );
}
