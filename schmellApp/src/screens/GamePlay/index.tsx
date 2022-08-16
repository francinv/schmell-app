/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Animated, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {LeftCurve, RightCurve} from '../../assets/icons/Curves';
import SimpleText from '../../components/GameFunctions/SimpleText';
import QuestionWrapper from '../../components/Wrappers/QuestionWrapper';
import {
  selectLanguage,
  selectPlayers,
  selectQuestions,
} from '../../features/selectors';
import useColor from '../../hooks/useColor';
import useLocale from '../../hooks/useLocale';
import {carouselType, modalShowType} from '../../typings/common';
import {playerInGamePush, playerPush} from '../../utils/selectPlayer';
import Carousel from './Carousel';
import GameFooter from './GameFooter';
import GameHeader from './GameHeader';
import GameModal from './GameModal';
import Questions from './Questions';
import gamePlayStyles from './style';

export default () => {
  const questions = useSelector(selectQuestions);
  const players = useSelector(selectPlayers);
  const lang = useSelector(selectLanguage);

  const loadingTitle = useLocale(lang, 'GAME_LOADING_TITLE');
  const loading = useLocale(lang, 'GAME_LOADING_INFORMATION');

  const [carouselState, setCarouselState] = useState<carouselType>({
    currentQuestionIndex: 0,
    firstQuestionId: 0,
    questionList: playerPush(questions, players),
  });
  const [modalShow, setModalShow] = useState<modalShowType>({
    modalType: '',
    show: false,
  });

  const [moveAnimation] = useState(new Animated.Value(0));

  const isLast =
    carouselState?.currentQuestionIndex + 1 > carouselState.questionList.length;

  const handleShow = (modalInfo: modalShowType) => setModalShow(modalInfo);

  useEffect(() => {
    setCarouselState({
      ...carouselState,
      questionList: playerPush(questions, players),
    });
  }, [questions]);

  useEffect(() => {
    setCarouselState({
      ...carouselState,
      questionList: playerInGamePush(
        questions,
        carouselState.questionList,
        players,
        carouselState.currentQuestionIndex,
      ),
    });
  }, [players]);

  if (carouselState && carouselState.questionList.length) {
    return (
      <QuestionWrapper>
        <LeftCurve carouselState={carouselState} />
        <RightCurve carouselState={carouselState} />
        <GameHeader
          handleShow={() => handleShow({show: true, modalType: 'H'})}
        />
        <Questions
          carouselState={carouselState}
          isLast={isLast}
          moveAnimation={moveAnimation}
        />
        <GameFooter
          carouselState={carouselState}
          handleShow={() => handleShow({show: true, modalType: 'P'})}
        />
        <GameModal
          carouselState={carouselState}
          handleShow={() => handleShow({show: false, modalType: ''})}
          modalShow={modalShow}
        />
        <Carousel
          carouselState={carouselState}
          isLast={isLast}
          setCarouselState={setCarouselState}
          moveAnimation={moveAnimation}
        />
      </QuestionWrapper>
    );
  } else {
    return (
      <QuestionWrapper additionalStyling={gamePlayStyles.container}>
        <Text
          style={[
            gamePlayStyles.questionText,
            {textShadowColor: useColor('Pekelek')},
          ]}>
          {loadingTitle}
        </Text>
        <SimpleText text={loading as string} />
      </QuestionWrapper>
    );
  }
};
