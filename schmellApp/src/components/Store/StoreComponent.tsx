import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../features/selectors';
import useLocale from '../../hooks/useLocale';
import colorStyles from '../../styles/color.styles';
import layoutStyles from '../../styles/layout.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';

const StoreComponent: React.FC = () => {
  const lang = useSelector(selectLanguage);
  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView style={[layoutStyles.flex_1, layoutStyles.flex_center]}>
        <Text
          style={[
            textStyles.text_30,
            textStyles.text_font_primary,
            paddingStyles.p_10,
            textStyles.text_center,
            colorStyles.color_primary,
            textStyles.text_shadow,
          ]}>
          {useLocale(lang, 'STORE')}
        </Text>
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default StoreComponent;
