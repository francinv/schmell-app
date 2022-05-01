import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import layoutStyles from '../../styles/layout.styles';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';

const GameComponent: FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView style={layoutStyles.flex_1}>
        <Text>Spill</Text>
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default GameComponent;
