import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {Text, TouchableOpacity} from 'react-native';
import {setSelectedGame} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import globalStyles from '../../styles/global.styles';
import widthStyles from '../../styles/width.styles';
import marginStyles from '../../styles/margin.styles';
import colorStyles from '../../styles/color.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import themeStyles from '../../styles/theme.styles';
import textStyles from '../../styles/text.styles';
import paddingStyles from '../../styles/padding.styles';

interface GameButtonProps {
  id: number;
  name: string;
  handleShow: () => void;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  selectedGame: (query: number) => dispatch(setSelectedGame(query)),
});

const GameButton: React.FC<GameButtonProps> = ({id, name, handleShow}) => {
  const {selectedGame} = actionDispatch(useAppDispatch());
  const handleClick = () => {
    selectedGame(id);
    handleShow();
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={[
        colorStyles.bg_primary,
        widthStyles(0).w_p_85,
        marginStyles.mt_30,
        heightStyles(75).h_custom,
        globalStyles.border_radius_8,
        layoutStyles.flex_center,
        colorStyles.shadow_primary,
        colorStyles.border_secondary,
        widthStyles(0).border_width_05,
        themeStyles.sh_off_w_2_h_2,
        themeStyles.sh_op_02,
        themeStyles.sh_rad_3,
      ]}>
      <Text
        style={[
          textStyles.text_font_primary,
          textStyles.text_35,
          colorStyles.color_secondary,
          paddingStyles.p_10,
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default GameButton;
