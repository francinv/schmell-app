import React from 'react';
import {useSelector} from 'react-redux';
import CardShow from '../components/GameFunctions/CardShow';
import SimpleText from '../components/GameFunctions/SimpleText';
import {selectGameStatus, selectLanguage} from '../features/selectors';
import {questionType} from '../typings/questionTypes';
import {parseFunctionAnswer} from '../utils/parsers';
import useLocale from './useLocale';

export default (question: questionType, isLast: boolean) => {
  const lang = useSelector(selectLanguage);
  const gameStatus = useSelector(selectGameStatus);

  const information = useLocale(lang, 'GAME_END_INFORMATION');
  const loading = useLocale(lang, 'GAME_LOADING_INFORMATION');

  const getContent = () => {
    if (gameStatus === 'loading') {
      return loading;
    } else {
      return isLast ? (information as string) : question.question_desc;
    }
  };
  switch (question?.type) {
    case 'Guess The Gibberish':
      return (
        <CardShow
          answer={parseFunctionAnswer(question.function)}
          questionDesc={getContent() as string}
        />
      );
    default:
      return <SimpleText text={getContent() as string} />;
  }
};
