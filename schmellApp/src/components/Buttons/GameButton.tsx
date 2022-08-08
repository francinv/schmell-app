import React, {FC, useEffect, useState} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {Animated, Pressable, Text} from 'react-native';
import {setSelectedGame} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import globalStyles from '../../styles/global.styles';
import widthStyles from '../../styles/width.styles';
import marginStyles from '../../styles/margin.styles';
import colorStyles from '../../styles/color.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import textStyles from '../../styles/text.styles';
import paddingStyles from '../../styles/padding.styles';
import {gameType} from '../../typings/gameTypes';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../typings/navigationTypes';
import GameDetail from '../Home/GameDetail';
import {useSelector} from 'react-redux';
import {selectGameDetail} from '../../features/selectors';
import rollInAnimation from '../../animations/rollInAnimation';
import rollOutAnimation from '../../animations/rollOutAnimation';

interface GameButtonProps {
  game: gameType;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  selectedGame: (query: number) => dispatch(setSelectedGame(query)),
});

const GameButton: FC<GameButtonProps> = ({game}) => {
  const {id, name} = game;
  const [shadowAnim] = useState(new Animated.Value(0));
  const [opacityAnim] = useState(new Animated.Value(0));
  const [borderAnim] = useState(new Animated.Value(0));
  const detailShow = useSelector(selectGameDetail);
  const [shouldShowDetail, setShouldShowDetail] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const {selectedGame} = actionDispatch(useAppDispatch());
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    if (detailShow) {
      detailShow.forEach(detail => {
        if (detail.id === id && !detail.show) {
          setShouldShowDetail(true);
        } else if (detail.id === id && detail.show) {
          setShouldShowDetail(false);
        }
      });
    } else {
      setShouldShowDetail(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shadowInterpolation = shadowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [6, 0],
  });
  const borderInterpolation = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0],
  });

  const buttonStyle = {
    shadowOffset: {width: shadowInterpolation, height: shadowInterpolation},
    shadowRadius: shadowInterpolation,
    borderBottomStartRadius: borderInterpolation,
    borderBottomEndRadius: borderInterpolation,
  };

  const handleClick = () => {
    if (shouldShowDetail) {
      if (!showDetail) {
        rollInAnimation(opacityAnim, setShowDetail, shadowAnim, borderAnim);
      } else {
        rollOutAnimation(opacityAnim, setShowDetail, shadowAnim, borderAnim);
      }
    } else {
      selectedGame(id);
      navigation.navigate('GameSettings');
    }
  };

  return (
    <>
      <Pressable onPress={handleClick} style={widthStyles(0).w_p_85}>
        <Animated.View
          style={[
            marginStyles.mt_30,
            heightStyles(75).h_custom,
            colorStyles.bg_primary,
            globalStyles.border_radius_10,
            !showDetail ? globalStyles.boxShadow : null,
            layoutStyles.flex_center,
            globalStyles.z_10,
            buttonStyle,
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
        </Animated.View>
      </Pressable>
      {showDetail ? <GameDetail game={game} opacityAnim={opacityAnim} /> : null}
    </>
  );
};

export default GameButton;
