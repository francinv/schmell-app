import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import styles from './HeaderStyles';
import {useNavigation, useRoute} from '@react-navigation/native';
import globalStyles from '../../styles/global.styles';
import {
  BackIconButton,
  SettingsIconButton,
  StoreIconButton,
} from '../Buttons/IconButtons';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const title = route.name;

  if (title === 'Home') {
    return (
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.container}>
          <StoreIconButton navigation={navigation} />
          <SettingsIconButton navigation={navigation} />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.container}>
          <BackIconButton navigation={navigation} />
          <Image
            source={require('../../assets/images/logo.png')}
            style={[styles.logo, globalStyles.ml_auto, globalStyles.mr_auto]}
          />
          {/* <View style={[globalStyles.mr_10, globalStyles.ml_auto]} /> */}
        </View>
      </SafeAreaView>
    );
  }
};

export default Header;
