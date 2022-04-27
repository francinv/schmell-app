import React from 'react';
import {View} from 'react-native';
import globalStyles from '../../../styles/global.styles';
import SocialButton from '../../Buttons/SocialButtons';
import InputContainer from './InputContainer';

const Social: React.FC = () => {
  return (
    <>
      <InputContainer />
      <InputContainer>
        <View
          style={[
            globalStyles.flex_row,
            globalStyles.align_center,
            globalStyles.justify_center,
            globalStyles.mt_15,
          ]}>
          <SocialButton icon="facebook" />
          <SocialButton icon="instagram" />
          <SocialButton icon="tiktok" />
        </View>
      </InputContainer>
    </>
  );
};

export default Social;
