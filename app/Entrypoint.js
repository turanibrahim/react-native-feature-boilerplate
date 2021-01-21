import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ThemeProvider } from 'react-native-elements';

import Navigator from './navigation';
import configureStore from './store';
import theme from './config/theme';

const { persistor, store } = configureStore();

export default function Entrypoint() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Navigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
