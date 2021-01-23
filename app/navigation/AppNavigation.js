import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from '../features/auth/navigation';
import FeaturesNavigation from './FeaturesNavigation';

function App() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? <FeaturesNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}

export default App;
