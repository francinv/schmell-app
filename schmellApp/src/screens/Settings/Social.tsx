import React from 'react';
import {Linking, View} from 'react-native';
import {
  FaceBookIcon,
  InstagramIcon,
  TikTokIcon,
} from '../../assets/icons/SocialIcons';
import IconButton from '../../components/Buttons/IconButton';
import InputContainer from '../../components/Wrappers/InputContainer';
import socialUrls from '../../constants/socialUrls';
import settingStyles from './style';

const Social = () => {
  const handlePress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      console.error("Don't know how to open URI: " + url);
    }
  };

  const additionalMargin = {
    marginLeft: 10,
    marginRight: 10,
  };

  return (
    <>
      <InputContainer />
      <InputContainer>
        <View style={settingStyles.socialContainer}>
          <IconButton
            handlePress={() => handlePress(socialUrls.fb)}
            additionalStyling={additionalMargin}>
            <FaceBookIcon />
          </IconButton>
          <IconButton
            handlePress={() => handlePress(socialUrls.ig)}
            additionalStyling={additionalMargin}>
            <InstagramIcon />
          </IconButton>
          <IconButton
            handlePress={() => handlePress(socialUrls.tt)}
            additionalStyling={additionalMargin}>
            <TikTokIcon />
          </IconButton>
        </View>
      </InputContainer>
    </>
  );
};

export default Social;
