import React, {Dispatch} from 'react';
import {Pressable, Text, View} from 'react-native';
import RetryIcon from '../../assets/icons/RetryIcon';
import {fetchGames} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import colorStyles from '../../styles/color.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import globalStyles from '../../styles/global.styles';
import layoutStyles from '../../styles/layout.styles';
import {HomeWrapper} from './HomeComponent';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  fetchData: () => dispatch(fetchGames()),
});

const Failed = () => {
  const {fetchData} = actionDispatch(useAppDispatch());

  return (
    <HomeWrapper>
      <View>
        <Text
          style={[
            textStyles.text_font_primary,
            textStyles.text_50,
            textStyles.text_center,
            colorStyles.color_primary,
            textStyles.text_shadow,
            paddingStyles.p_hor_15,
          ]}>
          Oisann,
        </Text>
        <Text
          style={[
            textStyles.text_font_primary,
            textStyles.text_center,
            textStyles.text_30,
            textStyles.font_600,
            colorStyles.color_primary,
            marginStyles.mt_10,
          ]}>
          du er ikke tilkoblet for øyeblikket 😿
        </Text>
      </View>
      <Pressable
        style={[
          layoutStyles.flex_row,
          layoutStyles.align_center,
          colorStyles.bg_primary,
          paddingStyles.p_hor_5,
          globalStyles.border_radius_8,
          globalStyles.boxShadow,
        ]}
        onPress={fetchData}>
        <Text
          style={[
            textStyles.text_center,
            textStyles.text_font_primary,
            textStyles.text_25,
            paddingStyles.p_hor_15,
            paddingStyles.p_ver_10,
          ]}>
          Prøv igjen
        </Text>
        <RetryIcon />
      </Pressable>
    </HomeWrapper>
  );
};

export default Failed;
