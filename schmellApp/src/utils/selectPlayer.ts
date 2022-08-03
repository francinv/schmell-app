import _ from 'lodash';
import {questionType} from '../typings/questionTypes';

export const playerPush = (
  questions: questionType[],
  listOfPlayers: string[],
) => {
  return questions?.map(question => {
    let {question_desc} = question;
    if (question_desc.includes('N')) {
      const shuffledList = _.shuffle(listOfPlayers);
      const numberOfPlayers = question.question_desc.match(/N/g || [])!.length;
      const playerLength = listOfPlayers.length - 1;
      const randomNumbers: number[] = [];
      for (let i = 0; i < numberOfPlayers; i++) {
        const randomNumber = _.random(playerLength);
        if (randomNumbers.includes(randomNumber)) {
          randomNumbers.push(_.random(playerLength));
        } else {
          randomNumbers.push(randomNumber);
        }
        const stringToReplace = `N${i + 1}`;
        if (question_desc.includes(stringToReplace)) {
          question_desc = question_desc.replace(
            stringToReplace,
            shuffledList[randomNumbers[i]],
          );
        }
      }
      const newQuestion = {...question, question_desc: question_desc};
      question = newQuestion;
    }
    return question;
  });
};
