import React from 'react';
import {View} from 'react-native';
import layoutStyles from '../../../styles/layout.styles';
import marginStyles from '../../../styles/margin.styles';
import SocialButton from '../../Buttons/SocialButtons';
import InputContainer from './InputContainer';

const Social: React.FC = () => {
  return (
    <>
      <InputContainer />
      <InputContainer>
        <View
          style={[
            layoutStyles.flex_row,
            layoutStyles.align_center,
            layoutStyles.justify_center,
            marginStyles.mt_15,
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
