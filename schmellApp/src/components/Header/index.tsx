import React, {FC} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {HomeScreenNavigationProp} from '../../types/navigation';
import {useNavigation, useRoute} from '@react-navigation/native';
import headerStyle from './style';
import IconButton from '../Buttons/IconButton';
/* import StoreIcon from '../../assets/icons/StoreIcon'; */
import SettingsIcon from '../../assets/icons/SettingsIcon';
import BackIcon from '../../assets/icons/BackIcon';

const Header: FC = () => {
  const homeNavigation = useNavigation<HomeScreenNavigationProp>();
  const navigation = useNavigation();
  const route = useRoute();
  const title = route.name;

  const getHeaderInnerContent = () => {
    if (title === 'Home') {
      return (
        <>
          {/*<IconButton handlePress={() => homeNavigation.navigate('Store')}>
            <StoreIcon />
          </IconButton>*/}
          <IconButton
            handlePress={() => homeNavigation.navigate('Settings')}
            additionalStyling={{marginLeft: 'auto'}}>
            {/* Remove this styling when store is implemented*/}
            <SettingsIcon />
          </IconButton>
        </>
      );
    } else {
      return (
        <>
          <IconButton handlePress={() => navigation.goBack()}>
            <BackIcon />
          </IconButton>
          <Image
            source={require('../../assets/images/logo.png')}
            style={headerStyle.img}
          />
          <View />
        </>
      );
    }
  };
  return (
    <SafeAreaView style={headerStyle.container}>
      {getHeaderInnerContent()}
    </SafeAreaView>
  );
};

export default Header;
