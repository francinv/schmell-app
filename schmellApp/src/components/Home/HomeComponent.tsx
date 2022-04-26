import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import globalStyles from '../../styles/global.styles';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';

const HomeComponent: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView style={globalStyles.flex_1}>
        <Text style={{fontFamily: 'CCBiffBamBoomW00-Regular'}}>Hjem</Text>
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default HomeComponent;
