import React from 'react';
import {useSelector} from 'react-redux';
import CardShow from '../components/GameFunctions/CardShow';
import MultiShow from '../components/GameFunctions/MultiShow';
import SimpleText from '../components/GameFunctions/SimpleText';
import gameFunctionStyles from '../components/GameFunctions/style';
import {
  selectInnerGameCurrentElement,
  selectLanguage,
} from '../features/selectors';
import {questionType} from '../types/question';
import {parseFunctionAnswer, parseFunctionQuestions} from '../utils/parsers';
import useLocale from './useLocale';

export default (
  question: questionType,
  isLast: boolean,
  isLoading: boolean,
) => {
  const lang = useSelector(selectLanguage);
  const currentInnerGameElement = useSelector(selectInnerGameCurrentElement);

  const information = useLocale(lang, 'GAME_END_INFORMATION');
  const loading = useLocale(lang, 'GAME_LOADING_INFORMATION');

  const getContent = () => {
    if (isLoading) {
      return loading;
    } else {
      return isLast ? (information as string) : question.question_desc;
    }
  };
  switch (question?.type) {
    case 'Guess The Country':
    case 'Guess The Movie':
    case 'Guess The Song':
    case 'Guess The Gibberish':
    case 'Fleip eller fakta':
    case 'Emoji Guessing':
      return (
        <CardShow
          answer={parseFunctionAnswer(question.function)}
          questionDesc={getContent() as string}
          numberOfCards={1}
        />
      );
    case 'Mimic Challenge':
    case 'Instant Spoilers':
    case 'Laveste kortet':
      return (
        <SimpleText
          text={currentInnerGameElement}
          style={gameFunctionStyles.largerSimpleText}
        />
      );
    case 'Shots under brikka':
      return (
        <MultiShow
          questionDesc={question.question_desc}
          answers={parseFunctionQuestions(question.function)}
        />
      );
    default:
      return <SimpleText text={getContent() as string} />;
  }
};
