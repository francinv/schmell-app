import React, {FC} from 'react';
import {Animated, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLanguage, selectPlayers} from '../../../features/selectors';
import useLocale from '../../../locale/useLocale';
import colorStyles from '../../../styles/color.styles';
import globalStyles from '../../../styles/global.styles';
import heightStyles from '../../../styles/height.styles';
import layoutStyles from '../../../styles/layout.styles';
import marginStyles from '../../../styles/margin.styles';
import paddingStyles from '../../../styles/padding.styles';
import textStyles from '../../../styles/text.styles';
import widthStyles from '../../../styles/width.styles';

interface ButtonProps {
  interpolatedShake: Animated.AnimatedInterpolation;
}

const PlayerDisplay: FC<ButtonProps> = ({interpolatedShake}) => {
  const players = useSelector(selectPlayers);
  const lang = useSelector(selectLanguage);
  const playerDisplayText = useLocale(lang, 'GAMESETTINGS_NO_PLAYERS');

  function isPlayers() {
    return players.length > 0;
  }

  const boxStyle = {
    transform: [
      {
        translateX: interpolatedShake,
      },
    ],
  };

  return (
    <Animated.ScrollView
      style={[
        widthStyles(0).w_p_90,
        heightStyles(0).h_p_40,
        marginStyles.mt_15,
        paddingStyles.p_hor_15,
        paddingStyles.p_ver_10,
        colorStyles.bg_septenary,
        globalStyles.border_radius_20,
        marginStyles.m_hor_auto,
        boxStyle,
      ]}
      contentContainerStyle={[
        heightStyles(0).h_p_100,
        widthStyles(0).w_p_100,
        isPlayers() ? layoutStyles.row_wrap : layoutStyles.flex_center,
      ]}>
      {players.length !== 0 ? (
        players.map((player, index) => (
          <Text
            key={index}
            style={[
              widthStyles(0).w_p_33,
              textStyles.text_center,
              marginStyles.m_ver_10,
              textStyles.text_font_primary,
              textStyles.text_16,
              colorStyles.color_tertiary,
            ]}>
            {player}
          </Text>
        ))
      ) : (
        <Text
          style={[
            textStyles.text_font_primary,
            colorStyles.color_tertiary,
            textStyles.text_20,
            globalStyles.opacity_50,
          ]}>
          {playerDisplayText}
        </Text>
      )}
    </Animated.ScrollView>
  );
};

export default PlayerDisplay;
