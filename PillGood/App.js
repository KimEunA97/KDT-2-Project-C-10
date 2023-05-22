import React from 'react';
import TabNavigation from './src/component/TabNavigation.js';

import InteractionBtn from './src/component/InterationBtn.js';
import { View } from 'react-native/types/index.js';

export default function App() {

  return (

    <View>
      <TabNavigation></TabNavigation>
      <InteractionBtn></InteractionBtn>
    </View>
    
    )
}
