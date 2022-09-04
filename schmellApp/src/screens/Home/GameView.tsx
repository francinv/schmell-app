import React, {FC} from 'react';
import ScrollWrapper from '../../components/Wrappers/ScrollWrapper';
import GameButton from './GameButton';
import {useGetGamesQuery} from '../../services/apiService';

const GameView: FC = () => {
  const {data} = useGetGamesQuery('P');
  return (
    <ScrollWrapper>
      {data!.map(game => (
        <GameButton game={game} key={game.id} />
      ))}
    </ScrollWrapper>
  );
};

export default GameView;
