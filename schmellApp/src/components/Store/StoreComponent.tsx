import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import layoutStyles from '../../styles/layout.styles';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';

const StoreComponent: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView style={layoutStyles.flex_1}>
        <Text>Butikk</Text>
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default StoreComponent;
