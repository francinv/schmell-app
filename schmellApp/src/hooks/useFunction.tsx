import React from 'react';
import CountDown from '../components/QuestionsContent/Countdown';
import SimpleText from '../components/QuestionsContent/SimpleText';

export default (question_desc: string, type: string) => {
  switch (type) {
    case 'Guess The Gibberish':
      return <SimpleText text={'Her er det visning'} />;
    case 'Skal vi vedde?':
      return <CountDown countDownSeconds={30} questionDesc={question_desc} />;
    default:
      return <SimpleText text={question_desc} />;
  }
};
