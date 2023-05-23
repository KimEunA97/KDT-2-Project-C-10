import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const DropdownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemPress = (item) => {
    console.log('Selected item:', item);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleMenuToggle}>
        <Text>메뉴 토글</Text>
      </TouchableOpacity>
      {isMenuOpen && (
        <View>
          <TouchableOpacity onPress={() => handleMenuItemPress('아이템 1')}>
            <Text>아이템 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('아이템 2')}>
            <Text>아이템 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('아이템 3')}>
            <Text>아이템 3</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DropdownMenu;
