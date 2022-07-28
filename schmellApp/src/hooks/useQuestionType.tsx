import React from 'react';
import CountDown from '../components/QuestionsContent/Countdown';
import GTGShow from '../components/QuestionsContent/GTGShow';
import SimpleText from '../components/QuestionsContent/SimpleText';
import {questionType} from '../typings/questionTypes';
import {parseFunction} from '../utils/parsers';

export default (question_desc: string, question: questionType) => {
  switch (question?.type) {
    case 'Guess The Gibberish':
      return (
        <GTGShow
          answer={parseFunction(question.function)}
          questionDesc={question_desc}
        />
      );
    case 'Skal vi vedde?':
      return <CountDown countDownSeconds={30} questionDesc={question_desc} />;
    default:
      return <SimpleText text={question_desc} />;
  }
};
