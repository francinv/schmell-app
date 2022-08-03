import React from 'react';
import {useSelector} from 'react-redux';
import GTGShow from '../components/QuestionsContent/GTGShow';
import SimpleText from '../components/QuestionsContent/SimpleText';
import {selectGameStatus, selectLanguage} from '../features/selectors';
import {questionType} from '../typings/questionTypes';
import {parseFunction} from '../utils/parsers';
import useLocale from './useLocale';

export default (question: questionType, isLast: boolean) => {
  const lang = useSelector(selectLanguage);
  const fetchStatus = useSelector(selectGameStatus);
  const information = useLocale(lang, 'GAME_END_INFORMATION');
  const loading = useLocale(lang, 'GAME_LOADING_INFORMATION');
  const getContent = () => {
    if (fetchStatus === 'loading') {
      return loading;
    } else {
      return isLast ? information : question.question_desc;
    }
  };
  switch (question?.type) {
    case 'Guess The Gibberish':
      return (
        <GTGShow
          answer={parseFunction(question.function)}
          questionDesc={getContent() as string}
        />
      );
    default:
      return <SimpleText text={getContent() as string} />;
  }
};
