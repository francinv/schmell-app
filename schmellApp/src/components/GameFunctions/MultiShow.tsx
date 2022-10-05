import React, {FC} from 'react';
import {View} from 'react-native';
import CardShow from './CardShow';
import SimpleText from './SimpleText';
import gameFunctionStyles from './style';

interface MultiShowProps {
  questionDesc: string;
  answers: string[];
}

const MultiShow: FC<MultiShowProps> = ({questionDesc, answers}) => {
  return (
    <View>
      <SimpleText
        text={questionDesc}
        style={gameFunctionStyles.largerSimpleText}
      />
      <View style={gameFunctionStyles.multiShowContainer}>
        {answers.map((answer, index) => (
          <CardShow
            answer={answer}
            key={index}
            numberOfCards={answers.length}
          />
        ))}
      </View>
    </View>
  );
};

export default MultiShow;
