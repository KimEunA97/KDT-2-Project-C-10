import React from 'react';
import FetchPillData from './FetchPillData';
import { View, Text } from 'react-native';

export default function RenderFetchPillData() {
  const name = '타이레놀';
  const data = FetchPillData({ name });

  if (data) {
    const items = data.body?.items;
    if (items && items.length > 0) {
      const itemName = items[0].ITEM_NAME;
      return (
        <View>
          <Text>제품명: {itemName}</Text>
        </View>
      );
    }
  }

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
