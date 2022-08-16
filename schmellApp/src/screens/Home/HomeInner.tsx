import React from 'react';
import {selectGameStatus} from '../../features/selectors';
import {useSelector} from 'react-redux';
import Loading from '../../components/Status/Loading';
import Failed from '../../components/Status/Failed';
import GameView from './GameView';

export default () => {
  const gameStatus = useSelector(selectGameStatus);

  switch (gameStatus) {
    case 'loading':
      return <Loading />;
    case 'failed':
      return <Failed />;
    case 'succeeded':
      return <GameView />;
    default:
      return <GameView />;
  }
};
