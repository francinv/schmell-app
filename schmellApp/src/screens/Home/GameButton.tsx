import React, {FC, useEffect, useState} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {Animated} from 'react-native';
import {setSelectedGame} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import {selectGameDetail} from '../../features/selectors';
import {gameType} from '../../types/game';
import {HomeScreenNavigationProp} from '../../types/navigation';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import SchmellButton from '../../components/Buttons/SchmellButton';
import rollInAnimation from '../../animations/rollAnimations/rollInAnimation';
import rollOutAnimation from '../../animations/rollAnimations/rollOutAnimation';
import GameDetail from './GameDetail';

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

  const shadowInterpolation = shadowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [6, 0],
  });
  const borderInterpolation = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0],
  });

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

  const buttonStyle = {
    shadowOffset: {width: shadowInterpolation, height: shadowInterpolation},
    shadowRadius: shadowInterpolation,
    borderBottomStartRadius: borderInterpolation,
    borderBottomEndRadius: borderInterpolation,
  };

  const handlePress = () => {
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
      <SchmellButton
        type="L"
        content={name}
        handlePress={handlePress}
        wantShadow={!showDetail}
        additionalStyling={buttonStyle}
      />
      {showDetail ? <GameDetail game={game} opacityAnim={opacityAnim} /> : null}
    </>
  );
};

export default GameButton;
