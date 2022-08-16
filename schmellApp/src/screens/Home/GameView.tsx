import React, {FC} from 'react';
import ScrollWrapper from '../../components/Wrappers/ScrollWrapper';
import {selectGames} from '../../features/selectors';
import {useSelector} from 'react-redux';
import GameButton from './GameButton';

const GameView: FC = () => {
  const games = useSelector(selectGames);
  return (
    <ScrollWrapper>
      {games.map(game => (
        <GameButton game={game} key={game.id} />
      ))}
    </ScrollWrapper>
  );
};

export default GameView;
