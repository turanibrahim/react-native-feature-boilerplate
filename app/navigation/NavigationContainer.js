import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from '../features/auth/navigation';
import AppNavigation from './AppNavigation';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}

export default App;
