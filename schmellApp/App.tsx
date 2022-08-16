import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import {store} from './src/services/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import Settings from './src/screens/Settings';
import Store from './src/screens/Store';
import GameSettings from './src/screens/GameSettings';
import GamePlay from './src/screens/GamePlay';

const App = () => {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            hidden={false}
          />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerTransparent: true,
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="GameSettings" component={GameSettings} />
            <Stack.Screen name="Game" component={GamePlay} />
          </Stack.Navigator>
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
