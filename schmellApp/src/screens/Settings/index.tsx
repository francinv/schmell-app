import React from 'react';
import {Linking, Text} from 'react-native';
import {useSelector} from 'react-redux';
import SchmellButton from '../../components/Buttons/SchmellButton';
import Header from '../../components/Header';
import InnerContainer from '../../components/Wrappers/InnerContainer';
import Layout from '../../components/Wrappers/Layout';
import {selectLanguage} from '../../features/selectors';
import useLocale from '../../hooks/useLocale';
import Language from './Language';
import Social from './Social';
import settingStyles from './style';
import Voice from './Voice';

export default () => {
  const language = useSelector(selectLanguage);

  const handlePress = async () => {
    const url = 'mailto:schmellapp@gmail.com';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      console.error("Don't know how to open URI: " + url);
    }
  };

  return (
    <Layout>
      <Header />
      <InnerContainer>
        <Text style={settingStyles.settingsTitle}>
          {useLocale(language, 'SETTINGS')}
        </Text>
        <Voice />
        <Language />
        <Social />
        <SchmellButton
          type="S"
          content={useLocale(language, 'SETTINGS_C2A') as string}
          handlePress={handlePress}
          wantShadow={true}
          additionalStyling={{marginTop: 20}}
        />
      </InnerContainer>
    </Layout>
  );
};
