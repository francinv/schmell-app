import {Dispatch} from '@reduxjs/toolkit';
import React, {FC, useEffect, useState} from 'react';

import {Animated, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import scaleAnimation from '../../animations/scaleAnimation';
import slideAnimation from '../../animations/slideAnimation';
import UserIcon from '../../assets/icons/UserIcon';
import {XIconPlayerDisplay} from '../../assets/icons/XIcon';
import {removePlayer} from '../../features/gamesettings/gameSettingSlice';
import {useAppDispatch} from '../../features/hooks';
import {selectLanguage, selectPlayers} from '../../features/selectors';
import useLocale from '../../hooks/useLocale';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';
import {getInitialList} from '../../utils/listGenerators';

interface ButtonProps {
  interpolatedShake: Animated.AnimatedInterpolation;
}

interface NameProps {
  name: string;
  index: number;
  scaleValue: Animated.Value[];
  moveValue: Animated.Value[];
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  removeFromList: (query: number) => dispatch(removePlayer(query)),
});

const PlayerName: FC<NameProps> = props => {
  const {index, name, scaleValue, moveValue} = props;
  const {removeFromList} = actionDispatch(useAppDispatch());

  useEffect(() => {
    if (moveValue[1] !== undefined) {
      moveValue[1].setValue(-50);
      slideAnimation(moveValue[1]);
    }
    scaleValue[0].setValue(0);
    scaleAnimation(scaleValue[0]);
  }, [index, moveValue, scaleValue]);

  const boxStyle = {
    transform: [
      {
        scale: scaleValue[index],
      },
      {
        translateX: moveValue[index],
      },
    ],
  };

  const handlePress = () => {
    removeFromList(index);
  };

  return (
    <Animated.View
      style={[
        boxStyle,
        marginStyles.m_ver_10,
        heightStyles(40).h_custom,
        widthStyles(0).w_p_45,
        paddingStyles.p_5,
        colorStyles.bg_tertiary,
        layoutStyles.flex_center,
        globalStyles.border_radius_8,
      ]}>
      <UserIcon />
      <Animated.Text
        style={[
          textStyles.text_center,
          textStyles.text_font_primary,
          textStyles.text_22,
          colorStyles.color_tertiary,
          widthStyles(0).w_p_100,
        ]}>
        {name}
      </Animated.Text>
      <TouchableOpacity style={globalStyles.iconRightTop} onPress={handlePress}>
        <XIconPlayerDisplay />
      </TouchableOpacity>
    </Animated.View>
  );
};

const PlayerDisplay: FC<ButtonProps> = ({interpolatedShake}) => {
  const players = useSelector(selectPlayers);
  const lang = useSelector(selectLanguage);

  const [scaleValues] = useState<Animated.Value[]>(
    getInitialList(players?.length, 1),
  );
  const [moveValues] = useState<Animated.Value[]>(
    getInitialList(players?.length, 0),
  );
  const playerDisplayText = useLocale(lang, 'GAMESETTINGS_NO_PLAYERS');

  useEffect(() => {
    scaleValues.push(new Animated.Value(1));
    moveValues.push(new Animated.Value(0));
  }, [players, scaleValues, moveValues]);

  const isPlayers = players.length > 0;

  const vibrateStyle = {
    transform: [
      {
        translateX: interpolatedShake,
      },
    ],
  };

  return (
    <Animated.ScrollView
      style={[
        widthStyles(0).w_p_99,
        marginStyles.mt_15,
        marginStyles.m_hor_auto,
        layoutStyles.flex_1,
        vibrateStyle,
      ]}
      contentContainerStyle={[
        !isPlayers ? layoutStyles.flex_1 : null,
        isPlayers ? layoutStyles.row_wrap : layoutStyles.flex_center,
        layoutStyles.justify_evenly,
      ]}>
      {isPlayers ? (
        players.map((player, index) => (
          <PlayerName
            key={index}
            index={index}
            moveValue={moveValues}
            scaleValue={scaleValues}
            name={player}
          />
        ))
      ) : (
        <Animated.Text
          style={[
            textStyles.text_font_primary,
            colorStyles.color_tertiary,
            textStyles.text_20,
            globalStyles.opacity_50,
          ]}>
          {playerDisplayText}
        </Animated.Text>
      )}
    </Animated.ScrollView>
  );
};

export default PlayerDisplay;
