import React from 'react';
import {store} from './src/services/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeComponent from './src/components/Home/HomeComponent';
import SettingsComponent from './src/components/Settings/SettingsComponent';
import StoreComponent from './src/components/Store/StoreComponent';
import GameSettingsComponent from './src/components/GameSettings/GameSettingsComponent';
import {StatusBar, useColorScheme} from 'react-native';

const App = () => {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Provider store={store}>
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
          <Stack.Screen name="Home" component={HomeComponent} />
          <Stack.Screen name="Settings" component={SettingsComponent} />
          <Stack.Screen name="Store" component={StoreComponent} />
          <Stack.Screen name="GameSettings" component={GameSettingsComponent} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
