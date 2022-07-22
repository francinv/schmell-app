import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../features/selectors';
import useLocale from '../../locale/useLocale';
import layoutStyles from '../../styles/layout.styles';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';

const StoreComponent: React.FC = () => {
  const lang = useSelector(selectLanguage);
  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView style={layoutStyles.flex_1}>
        <Text>{useLocale(lang, 'STORE')}</Text>
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default StoreComponent;
