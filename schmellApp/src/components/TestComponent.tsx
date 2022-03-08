import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchFromStorage} from '../features/game/gameSlice';
import {useAppDispatch} from '../features/hooks';
import {selectGames, selectQuestions, selectWeeks} from '../features/selectors';
import {setTokens} from '../features/usersettings/userSettingSlice';

export default function TestComponent() {
  const dispatch = useAppDispatch();
  const games = useSelector(selectGames);
  const weeks = useSelector(selectWeeks);
  const questions = useSelector(selectQuestions);

  useEffect(() => {
    dispatch(setTokens());
    dispatch(fetchFromStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      {games.map(game => (
        <Text key={game.id}>{game.name}</Text>
      ))}
      {weeks.map(week => (
        <Text key={week.id}>Uke {week.week_number}</Text>
      ))}
      {questions.map(question => (
        <Text key={question.id}>Spørsmål: {question.question_desc}</Text>
      ))}
    </View>
  );
}
