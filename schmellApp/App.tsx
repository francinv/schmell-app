import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {store} from './src/services/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeComponent from './src/components/Home/HomeComponent';
import SettingsComponent from './src/components/Settings/SettingsComponent';
import StoreComponent from './src/components/Store/StoreComponent';
import GameSettingsComponent from './src/components/GameSettings/GameSettingsComponent';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          hidden={false}
        />
        <Stack.Navigator initialRouteName="Hjem">
          <Stack.Screen
            name="Hjem"
            component={HomeComponent}
            options={{
              headerStyle: {
                backgroundColor: 'rgba(159, 162, 180, 0.2)',
              },
            }}
          />
          <Stack.Screen name="Innstillinger" component={SettingsComponent} />
          <Stack.Screen name="Butikk" component={StoreComponent} />
          <Stack.Screen
            name="Spillinnstillinger"
            component={GameSettingsComponent}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
