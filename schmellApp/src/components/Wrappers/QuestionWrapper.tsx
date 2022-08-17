import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {ContainerProps} from './Layout';
import {layoutStyles} from './styles';

const QuestionWrapper: FC<ContainerProps> = ({children, additionalStyling}) => (
  <SafeAreaView style={[layoutStyles.questionContainer, additionalStyling]}>
    {children}
  </SafeAreaView>
);

export default QuestionWrapper;
