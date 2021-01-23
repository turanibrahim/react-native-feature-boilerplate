import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../containers';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
