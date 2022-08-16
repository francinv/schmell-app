import React, {FC, useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {selectLanguage, selectPlayers} from '../../features/selectors';
import {getInitialList} from '../../utils/listGenerators';
import {useSelector} from 'react-redux';
import useLocale from '../../hooks/useLocale';
import gameSettingStyles from './style';
import PlayerName from './PlayerName';

interface PlayerDisplayProps {
  interpolatedShake: Animated.AnimatedInterpolation;
}

const PlayerDisplay: FC<PlayerDisplayProps> = ({interpolatedShake}) => {
  const players = useSelector(selectPlayers);
  const lang = useSelector(selectLanguage);

  const [scaleValues] = useState<Animated.Value[]>(
    getInitialList(players?.length, 1),
  );
  const [moveValues] = useState<Animated.Value[]>(
    getInitialList(players?.length, 0),
  );

  const playerDisplayText = useLocale(lang, 'GAMESETTINGS_NO_PLAYERS');

  const isPlayers = players.length > 0;

  const vibrateStyle = {
    transform: [
      {
        translateX: interpolatedShake,
      },
    ],
  };

  useEffect(() => {
    scaleValues.push(new Animated.Value(1));
    moveValues.push(new Animated.Value(0));
  }, [players, scaleValues, moveValues]);

  return (
    <Animated.ScrollView
      style={[vibrateStyle, gameSettingStyles.playerContainer]}
      contentContainerStyle={[
        gameSettingStyles.playerContent,
        !isPlayers ? gameSettingStyles.flex : null,
        isPlayers
          ? gameSettingStyles.contentRowWrap
          : gameSettingStyles.contentCenter,
      ]}>
      {isPlayers ? (
        players.map((player, index) => (
          <PlayerName
            index={index}
            key={index}
            moveValue={moveValues}
            scaleValue={scaleValues}
            name={player}
          />
        ))
      ) : (
        <Animated.Text style={gameSettingStyles.noPlayer}>
          {playerDisplayText}
        </Animated.Text>
      )}
    </Animated.ScrollView>
  );
};

export default PlayerDisplay;
