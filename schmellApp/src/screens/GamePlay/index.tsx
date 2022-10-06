/* eslint-disable react-hooks/exhaustive-deps */
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {useSelector} from 'react-redux';
import QuestionWrapper from '../../components/Wrappers/QuestionWrapper';
import actionDispatch from '../../features/dispatch';
import {useAppDispatch} from '../../features/hooks';
import {selectPlayers} from '../../features/selectors';
import {useAddPlayerToQuestionsQuery} from '../../services/apiService';
import {modalShowType} from '../../types/common';
import {GameRouteProp} from '../../types/navigation';
import Carousel from './Carousel';
import GameFooter from './GameFooter';
import GameHeader from './GameHeader';
import GameModal from './GameModal';
import Questions from './Questions';

export default () => {
  const route = useRoute<GameRouteProp>();
  const players = useSelector(selectPlayers);

  const {setGamePlayQuestions} = actionDispatch(useAppDispatch());

  const {isFetching, data, isSuccess} = useAddPlayerToQuestionsQuery({
    players: players,
    questions: route.params.questions,
  });

  const [modalShow, setModalShow] = useState<modalShowType>({
    modalType: '',
    show: false,
  });
  const [isCountDownDone, setIsCountDownDone] = useState(false);
  const [moveAnimation] = useState(new Animated.Value(0));

  const handleShow = (modalInfo: modalShowType) => setModalShow(modalInfo);

  useEffect(() => {
    if (isSuccess && data && !isFetching) {
      setGamePlayQuestions(data);
    }
  }, [isSuccess, data, isFetching]);

  const GamePlayInnerContent = () => (
    <>
      <GameHeader
        handleShow={() => handleShow({show: true, modalType: 'H'})}
        setCountDownDone={setIsCountDownDone}
        isCountDownDone={isCountDownDone}
      />
      <Questions moveAnimation={moveAnimation} isLoading={isFetching} />
      <GameFooter handleShow={() => handleShow({show: true, modalType: 'P'})} />
      <GameModal
        handleShow={() => handleShow({show: false, modalType: ''})}
        modalShow={modalShow}
      />
      <Carousel
        moveAnimation={moveAnimation}
        isCountDownDone={isCountDownDone}
        setCountDownDone={setIsCountDownDone}
      />
    </>
  );
  return (
    <QuestionWrapper>{data ? <GamePlayInnerContent /> : null}</QuestionWrapper>
  );
};
