import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {store} from './src/services/store';
import {Provider} from 'react-redux';
import TestComponent from './src/components/TestComponent';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TestComponent />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
