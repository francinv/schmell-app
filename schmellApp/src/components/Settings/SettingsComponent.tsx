import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import globalStyles from '../../styles/global.styles';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';

const SettingsComponent: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView style={globalStyles.flex_1}>
        <Text>Innstillinger</Text>
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default SettingsComponent;
