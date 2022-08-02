import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {Text, TouchableOpacity} from 'react-native';
import {fetchWeek, setSelectedGame} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import globalStyles from '../../styles/global.styles';
import widthStyles from '../../styles/width.styles';
import marginStyles from '../../styles/margin.styles';
import colorStyles from '../../styles/color.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import textStyles from '../../styles/text.styles';
import paddingStyles from '../../styles/padding.styles';
import {getCurrentWeekNumber} from '../../utils/dateUtil';

interface GameButtonProps {
  id: number;
  name: string;
  handleShow: () => void;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  selectedGame: (query: number) => dispatch(setSelectedGame(query)),
  setWeek: (query: {weekNumber: number; idGame: number}) =>
    dispatch(fetchWeek(query)),
});

const GameButton: React.FC<GameButtonProps> = ({id, name, handleShow}) => {
  const {selectedGame, setWeek} = actionDispatch(useAppDispatch());
  const handleClick = () => {
    setWeek({weekNumber: getCurrentWeekNumber(), idGame: id});
    selectedGame(id);
    handleShow();
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={[
        widthStyles(0).w_p_85,
        marginStyles.mt_30,
        heightStyles(75).h_custom,
        globalStyles.border_radius_10,
        colorStyles.bg_primary,
        globalStyles.boxShadow,
        layoutStyles.flex_center,
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
