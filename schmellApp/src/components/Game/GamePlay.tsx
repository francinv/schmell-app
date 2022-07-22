import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {LeftCurve, RightCurve} from '../../assets/icons/Curves';
import {selectQuestions} from '../../features/selectors';
import colorStyles from '../../styles/color.styles';
import layoutStyles from '../../styles/layout.styles';
import {questionType} from '../../typings/questionTypes';
import {randomizeList} from '../../utils/filterMethods';
import Carousel from './Carousel';
import GameFooter from './GameFooter';
import GameHeader from './GameHeader';
import GameModal from './GameModal';
import QuestionsComponent from './QuestionsComponent';

export type carouselType = {
  firstQuestionId: number;
  currentQuestionIndex: number;
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
    questionList: randomizeList(questions),
  });
  const [moveAnim] = useState(new Animated.Value(0));
  const isLast =
    carouselState.currentQuestionIndex + 1 > carouselState.questionList.length;

  return (
    <SafeAreaView style={[layoutStyles.flex_1, colorStyles.bg_septenary]}>
      <LeftCurve
        type={
          !isLast
            ? carouselState.questionList[carouselState.currentQuestionIndex]
                .type
            : 'Pekelek'
        }
      />
      <RightCurve
        type={
          !isLast
            ? carouselState.questionList[carouselState.currentQuestionIndex]
                .type
            : 'Pekelek'
        }
      />
      <GameHeader
        handleShow={() => handleShow({show: true, modalType: 'H'})}
        navigation={navigation}
      />
      <QuestionsComponent
        carouselState={carouselState}
        moveAnim={moveAnim}
        isLast={isLast}
      />
      <GameFooter
        handleShow={() => handleShow({show: true, modalType: 'P'})}
        currentQuestion={
          carouselState.questionList[carouselState.currentQuestionIndex]
        }
      />
      <GameModal
        currentQuestion={
          carouselState.questionList[carouselState.currentQuestionIndex]
        }
        modalShow={modalShow}
        handleShow={handleShow}
      />
      <Carousel
        carouselState={carouselState}
        navigation={navigation}
        setCarouselState={setCarouselState}
        moveAnim={moveAnim}
        isLast={isLast}
      />
    </SafeAreaView>
  );
};

export default GamePlay;
