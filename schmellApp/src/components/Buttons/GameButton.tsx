import React, {FC, useEffect, useState} from 'react';
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
import {gameType} from '../../typings/gameTypes';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../typings/navigationTypes';
import GameDetail from '../Home/GameDetail';
import {useSelector} from 'react-redux';
import {selectGameDetail} from '../../features/selectors';

interface GameButtonProps {
  game: gameType;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  selectedGame: (query: number) => dispatch(setSelectedGame(query)),
  setWeek: (query: {weekNumber: number; idGame: number}) =>
    dispatch(fetchWeek(query)),
});

const GameButton: FC<GameButtonProps> = ({game}) => {
  const {id, name} = game;
  const detailShow = useSelector(selectGameDetail);
  const [shouldShowDetail, setShouldShowDetail] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const {selectedGame, setWeek} = actionDispatch(useAppDispatch());
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    if (detailShow) {
      detailShow.forEach(detail => {
        if (detail.id === id && !detail.show) {
          setShouldShowDetail(true);
        } else if (detail.id === id && detail.show) {
          setShouldShowDetail(false);
        } else {
          setShouldShowDetail(true);
        }
      });
    } else {
      setShouldShowDetail(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    if (shouldShowDetail) {
      setShowDetail(wasShown => !wasShown);
    } else {
      setWeek({weekNumber: getCurrentWeekNumber(), idGame: id});
      selectedGame(id);
      navigation.navigate('GameSettings');
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleClick}
        style={[
          widthStyles(0).w_p_85,
          marginStyles.mt_30,
          heightStyles(75).h_custom,
          showDetail
            ? globalStyles.border_top_10
            : globalStyles.border_radius_10,
          colorStyles.bg_primary,
          !showDetail ? globalStyles.boxShadow : null,
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
      {showDetail ? <GameDetail game={game} /> : null}
    </>
  );
};

export default GameButton;
