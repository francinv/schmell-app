import React from 'react';
import Loading from '../../components/Status/Loading';
import Failed from '../../components/Status/Failed';
import GameView from './GameView';
import {useGetGamesQuery} from '../../services/apiService';

export default () => {
  const {isError, isLoading, isSuccess, refetch} = useGetGamesQuery('P');

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Failed refetch={refetch} />;
  } else if (isSuccess) {
    return <GameView />;
  } else {
    return <GameView />;
  }
};
