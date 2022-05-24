/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {
  fetchFromStorage,
  setSelectedGame,
  setWeek,
} from '../features/game/gameSlice';
import {useAppDispatch} from '../features/hooks';
import {
  selectedGame,
  selectGames,
  selectQuestions,
  selectWeekNumber,
  selectWeeks,
} from '../features/selectors';
import {setTokens} from '../features/usersettings/userSettingSlice';
// import {playerPush} from '../utils/selectPlayer';
import {Dispatch} from '@reduxjs/toolkit';
import {encryptedStorageService} from '../utils/EncryptedStorageUtil';
import {filterList, randomizeList} from '../utils/filterMethods';
import {playerPush} from '../utils/selectPlayer';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  authToken: (query: string) => dispatch(setTokens(query)),
  fetchData: () => dispatch(fetchFromStorage()),
  setCurrentWeek: (query: number) => dispatch(setWeek(query)),
  setCurrentGame: (query: number) => dispatch(setSelectedGame(query)),
});

export default function TestComponent() {
  const {authToken, fetchData, setCurrentWeek, setCurrentGame} = actionDispatch(
    useAppDispatch(),
  );
  const games = useSelector(selectGames);
  const weeks = useSelector(selectWeeks);
  const questions = useSelector(selectQuestions);
  const weekNumber = useSelector(selectWeekNumber);
  const selected_Game = useSelector(selectedGame);
  const players = ['Francin', 'Lisa', 'Ola', 'Herman', 'Seran'];

  useEffect(() => {
    // const unique_ID = DeviceInfo.getUniqueId();
    async function checkUserHasToken() {
      // const token = await encryptedStorageService(
      //   `${unique_ID}_key`,
      //   '',
      //   'GET',
      // );
      // if (token === undefined) {
      //   authToken(unique_ID);
      // }
    }
    checkUserHasToken();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      {games?.map(game => (
        <Text key={game.id}>{game.name}</Text>
      ))}
      {weeks?.map(week => (
        <Text key={week.id}>Uke {week.week_number}</Text>
      ))}
      {randomizeList(
        filterList(weekNumber, weeks, selected_Game, questions),
      ).map(question => (
        <Text key={question.id}>
          Spørsmål: {playerPush(question.question_desc, players)}
        </Text>
      ))}
    </View>
  );
}
