import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectPlayers} from '../../../features/selectors';
import colorStyles from '../../../styles/color.styles';
import globalStyles from '../../../styles/global.styles';
import heightStyles from '../../../styles/height.styles';
import layoutStyles from '../../../styles/layout.styles';
import marginStyles from '../../../styles/margin.styles';
import paddingStyles from '../../../styles/padding.styles';
import textStyles from '../../../styles/text.styles';
import widthStyles from '../../../styles/width.styles';

const PlayerDisplay: React.FC = () => {
  const players = useSelector(selectPlayers);

  function isPlayers() {
    return players.length > 0;
  }

  return (
    <ScrollView
      style={[
        widthStyles(0).w_p_90,
        heightStyles(0).h_p_40,
        marginStyles.mt_15,
        paddingStyles.p_hor_15,
        paddingStyles.p_ver_10,
        colorStyles.bg_quinary,
        globalStyles.border_radius_20,
        marginStyles.m_hor_auto,
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
          Ingen spillere her enda...
        </Text>
      )}
    </ScrollView>
  );
};

export default PlayerDisplay;