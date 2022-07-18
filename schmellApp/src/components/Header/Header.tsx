import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import globalStyles from '../../styles/global.styles';
import {
  BackIconButton,
  SettingsIconButton,
  StoreIconButton,
} from '../Buttons/IconButtons';
import marginStyles from '../../styles/margin.styles';
import heightStyles from '../../styles/height.styles';
import colorStyles from '../../styles/color.styles';
import widthStyles from '../../styles/width.styles';
import layoutStyles from '../../styles/layout.styles';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const title = route.name;

  if (title === 'Home') {
    return (
      <SafeAreaView
        style={[
          heightStyles(95).h_custom,
          colorStyles.bg_tertiary,
          globalStyles.border_bottom_end_20,
          globalStyles.border_bottom_start_20,
        ]}>
        <View
          style={[
            widthStyles(0).w_p_100,
            layoutStyles.flex_row,
            layoutStyles.align_center,
            layoutStyles.justify_space,
          ]}>
          <StoreIconButton
            onPress={() => navigation.navigate('Store' as never)}
          />
          <SettingsIconButton
            onPress={() => navigation.navigate('Settings' as never)}
          />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView
        style={[
          heightStyles(95).h_custom,
          colorStyles.bg_tertiary,
          globalStyles.border_bottom_end_20,
          globalStyles.border_bottom_start_20,
        ]}>
        <View
          style={[
            widthStyles(0).w_p_100,
            layoutStyles.flex_row,
            layoutStyles.align_center,
            layoutStyles.justify_space,
          ]}>
          <BackIconButton onPress={() => navigation.goBack()} />
          <Image
            source={require('../../assets/images/logo.png')}
            style={[
              widthStyles(240).w_custom,
              heightStyles(55).h_custom,
              marginStyles.ml_auto,
              marginStyles.mr_auto,
            ]}
          />
          <View style={[marginStyles.mr_10, marginStyles.ml_auto]} />
        </View>
      </SafeAreaView>
    );
  }
};

export default Header;
