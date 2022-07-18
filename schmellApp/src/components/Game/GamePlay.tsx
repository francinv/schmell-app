import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {colorList} from '../../constants/colors';
import {selectQuestions} from '../../features/selectors';
import layoutStyles from '../../styles/layout.styles';
import {questionType} from '../../typings/questionTypes';
import {randomizeList} from '../../utils/filterMethods';
import GameFooter from './GameFooter';
import GameHeader from './GameHeader';
import GameModal from './GameModal';
import QuestionsComponent from './QuestionsComponent';

export type carouselType = {
  firstQuestionId: number;
  currentQuestionIndex: number;
  currentColor: number;
  questionList: questionType[];
};

const GamePlay: FC = () => {
  const navigation = useNavigation();
  const [modalShow, setModalShow] = useState({show: false, modalType: ''});

  const handleShow = (modalInfo: {show: boolean; modalType: string}) =>
    setModalShow(modalInfo);

  const questions = useSelector(selectQuestions);
  const [carouselState, setCarouselState] = useState<carouselType>({
    firstQuestionId: 0,
    currentQuestionIndex: 0,
    currentColor: 0,
    questionList: randomizeList(questions),
  });
  return (
    <SafeAreaView
      style={[
        layoutStyles.flex_1,
        {backgroundColor: colorList[carouselState.currentColor]},
      ]}>
      <GameHeader
        handleShow={() => handleShow({show: true, modalType: 'H'})}
        navigation={navigation}
      />
      <QuestionsComponent
        carouselState={carouselState}
        setCarouselState={setCarouselState}
        navigation={navigation}
      />
      <GameFooter handleShow={() => handleShow({show: true, modalType: 'P'})} />
      <GameModal
        currentQuestion={
          carouselState.questionList[carouselState.currentQuestionIndex]
        }
        modalShow={modalShow}
        handleShow={handleShow}
      />
    </SafeAreaView>
  );
};

export default GamePlay;
