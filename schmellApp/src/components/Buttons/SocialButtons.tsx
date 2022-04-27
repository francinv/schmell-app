import React from 'react';
import {Linking, TouchableOpacity} from 'react-native';
import {
  FaceBookIcon,
  InstagramIcon,
  TikTokIcon,
} from '../../assets/icons/SocialIcons';
import globalStyles from '../../styles/global.styles';

interface SocialButtonProps {
  icon: string;
}
const SocialButton: React.FC<SocialButtonProps> = ({icon}) => {
  function getIcon() {
    switch (icon) {
      case 'facebook':
        return <FaceBookIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'tiktok':
        return <TikTokIcon />;
      default:
        return <FaceBookIcon />;
    }
  }

  async function handleClick() {
    let url = '';
    switch (icon) {
      case 'facebook':
        url = 'https://www.facebook.com/';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/';
        break;
      case 'tiktok':
        url = 'https://www.tiktok.com/';
        break;
      default:
        break;
    }

    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      console.error("Don't know how to open URI: " + url);
    }
  }

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={[globalStyles.ml_10, globalStyles.mr_10]}>
      {getIcon()}
    </TouchableOpacity>
  );
};

export default SocialButton;
