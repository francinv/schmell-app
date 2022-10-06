import React from 'react';
import {useSelector} from 'react-redux';
import CardShow from '../components/GameFunctions/CardShow';
import DeckDraw from '../components/GameFunctions/DeckDraw';
import MultiShow from '../components/GameFunctions/MultiShow';
import QuizCardContainer from '../components/GameFunctions/QuizCardContainer';
import SimpleText from '../components/GameFunctions/SimpleText';
import gameFunctionStyles from '../components/GameFunctions/style';
import {
  selectInnerGameCurrentElement,
  selectLanguage,
} from '../features/selectors';
import {question} from '../types/question';
import {
  parseFunctionAnswer,
  parseFunctionCorrectAnswer,
  parseFunctionOptions,
  parseFunctionQuestions,
} from '../utils/parsers';
import useLocale from './useLocale';

const useFunctionByType = (
  currentQuestion: question,
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
      return isLast ? (information as string) : currentQuestion?.question_desc;
    }
  };
  switch (currentQuestion?.type) {
    case 'Guess The Country':
    case 'Guess The Movie':
    case 'Guess The Song':
    case 'Guess The Gibberish':
    case 'Fleip eller fakta':
    case 'Emoji Guessing':
      return (
        <CardShow
          answer={parseFunctionAnswer(currentQuestion.function)}
          questionDesc={getContent() as string}
          numberOfCards={1}
        />
      );
    case 'Mimic Challenge':
    case 'Instant Spoilers':
      return (
        <SimpleText
          text={currentInnerGameElement}
          style={gameFunctionStyles.largerSimpleText}
        />
      );
    case 'Laveste kortet':
      return (
        <>
          <SimpleText text={getContent() as string} />
          <DeckDraw />
        </>
      );
    case 'Shots under brikka':
      return (
        <MultiShow
          questionDesc={currentQuestion.question_desc}
          answers={parseFunctionQuestions(currentQuestion.function)}
        />
      );
    case 'Quiz Game':
      return (
        <QuizCardContainer
          questionDesc={currentQuestion.question_desc}
          correctAnswer={parseFunctionCorrectAnswer(currentQuestion.function)}
          options={parseFunctionOptions(currentQuestion.function)}
        />
      );
    default:
      return <SimpleText text={getContent() as string} />;
  }
};

export default useFunctionByType;
