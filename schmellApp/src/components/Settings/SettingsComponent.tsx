import React from 'react';
import {Linking, SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../features/selectors';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';
import Volume from './Components/Volume';
import Voice from './Components/Voice';
import Language from './Components/Language';
import Social from './Components/Social';
import CallToAction from '../Buttons/CallToAction';
import layoutStyles from '../../styles/layout.styles';
import textStyles from '../../styles/text.styles';
import colorStyles from '../../styles/color.styles';
import marginStyles from '../../styles/margin.styles';
import useLocale from '../../hooks/useLocale';

const SettingsComponent: React.FC = () => {
  const language = useSelector(selectLanguage);

  async function handleClick() {
    const url = 'mailto:schmellapp@gmail.com';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      console.error("Don't know how to open URI: " + url);
    }
  }

  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView style={layoutStyles.flex_1}>
        <Text
          style={[
            textStyles.text_font_primary,
            textStyles.text_30,
            colorStyles.color_primary,
            marginStyles.m_ver_20,
            marginStyles.ml_15,
            textStyles.text_shadow,
          ]}>
          {useLocale(language, 'SETTINGS')}
        </Text>
        <Volume />
        <Voice />
        <Language />
        <Social />
        <CallToAction
          handleClick={handleClick}
          content={useLocale(language, 'SETTINGS_C2A') as string}
          customStyle={undefined}
        />
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default SettingsComponent;
