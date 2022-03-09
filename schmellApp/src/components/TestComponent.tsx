import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchFromStorage} from '../features/game/gameSlice';
import {useAppDispatch} from '../features/hooks';
import {
  selectedGame,
  selectGames,
  selectQuestions,
  selectWeekNumber,
  selectWeeks,
} from '../features/selectors';
import {setTokens} from '../features/usersettings/userSettingSlice';
import {filterList, randomizeList} from '../utils/filterMethods';
import {playerPush} from '../utils/selectPlayer';

export default function TestComponent() {
  const dispatch = useAppDispatch();
  const games = useSelector(selectGames);
  const weeks = useSelector(selectWeeks);
  const questions = useSelector(selectQuestions);
  const weekNumber = useSelector(selectWeekNumber);
  const selected_Game = useSelector(selectedGame);
  const players = ['Francin', 'Lisa', 'Ola', 'Herman', 'Seran'];

  useEffect(() => {
    dispatch(setTokens());
    dispatch(fetchFromStorage());
    async function x() {
      const t = await AsyncStorage.getAllKeys();
      // AsyncStorage.removeItem(LAST_UPDATED);
      console.log(t);
    }
    x();
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
