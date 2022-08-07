import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {selectGames} from '../../features/selectors';
import layoutStyles from '../../styles/layout.styles';
import widthStyles from '../../styles/width.styles';
import GameButton from '../Buttons/GameButton';

const HomeButtons: FC = () => {
  const games = useSelector(selectGames);

  const GameWrapper: FC = ({children}) => (
    <ScrollView
      style={[
        layoutStyles.flex_column,
        widthStyles(0).w_p_100,
        layoutStyles.flex_1,
      ]}
      contentContainerStyle={[
        layoutStyles.align_center,
        layoutStyles.justify_center,
      ]}>
      {children}
    </ScrollView>
  );

  return (
    <GameWrapper>
      {games.map(game => (
        <GameButton key={game.id} game={game} />
      ))}
    </GameWrapper>
  );
};

export default HomeButtons;
