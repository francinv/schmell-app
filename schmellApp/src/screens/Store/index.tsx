import React from 'react';
import {Text} from 'react-native';
import Header from '../../components/Header';
import InnerContainer from '../../components/Wrappers/InnerContainer';
import Layout from '../../components/Wrappers/Layout';
import {selectLanguage} from '../../features/selectors';
import {useSelector} from 'react-redux';
import useLocale from '../../hooks/useLocale';
import storeStyles from './style';

export default () => {
  const lang = useSelector(selectLanguage);

  return (
    <Layout>
      <Header />
      <InnerContainer>
        <Text style={storeStyles.text}>{useLocale(lang, 'STORE')}</Text>
      </InnerContainer>
    </Layout>
  );
};
