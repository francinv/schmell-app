import {getRandomNumber} from './numberUtil';

export function playerPush(question_desc: string, listOfPlayers: string[]) {
  let arraySize = listOfPlayers.length;
  if (
    question_desc.includes('N1') ||
    question_desc.includes('N2') ||
    question_desc.includes('N3')
  ) {
    let tempArray = question_desc.replace(
      'N1',
      listOfPlayers[getRandomNumber(arraySize)],
    );
    if (tempArray.includes('N2')) {
      let name = listOfPlayers[getRandomNumber(arraySize)];
      while (tempArray.includes(name)) {
        name = listOfPlayers[getRandomNumber(arraySize)];
      }
      tempArray = tempArray.replace('N2', name);
    }
    if (tempArray.includes('N3')) {
      let name = listOfPlayers[getRandomNumber(arraySize)];
      while (tempArray.includes(name)) {
        name = listOfPlayers[getRandomNumber(arraySize)];
      }
      tempArray = tempArray.replace('N3', name);
    }
    return tempArray;
  } else {
    return question_desc;
  }
}
