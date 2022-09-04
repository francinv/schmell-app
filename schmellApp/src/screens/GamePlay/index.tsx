import {Dispatch} from '@reduxjs/toolkit';
import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {LeftCurve, RightCurve} from '../../assets/icons/Curves';
import QuestionWrapper from '../../components/Wrappers/QuestionWrapper';
import {setQuestions} from '../../features/gameplay/gamePlaySlice';
import {useAppDispatch} from '../../features/hooks';
import {
  selectedWeekId,
  selectPlayers,
  selectPlayStatus,
  selectQuestions,
} from '../../features/selectors';
import {
  useAddPlayerToQuestionsQuery,
  useGetQuestionsQuery,
  useLazyAddPlayerInGameQuery,
} from '../../services/apiService';
import {modalShowType} from '../../typings/common';
import {questionType} from '../../typings/questionTypes';
import Carousel from './Carousel';
import GameFooter from './GameFooter';
import GameHeader from './GameHeader';
import GameModal from './GameModal';
import Questions from './Questions';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  fetchAllQuestions: (questions: questionType[]) =>
    dispatch(setQuestions(questions)),
});

export default () => {
  const players = useSelector(selectPlayers);
  const carouselStatus = useSelector(selectPlayStatus);
  const week = useSelector(selectedWeekId);
  const questions = useSelector(selectQuestions);

  const [trigger, result] = useLazyAddPlayerInGameQuery();

  const {fetchAllQuestions} = actionDispatch(useAppDispatch());

  const {isSuccess} = useGetQuestionsQuery({
    idWeek: week,
  });

  const {isFetching, data} = useAddPlayerToQuestionsQuery({
    players: players,
    questions: questions,
  });

  const [modalShow, setModalShow] = useState<modalShowType>({
    modalType: '',
    show: false,
  });

  const [moveAnimation] = useState(new Animated.Value(0));

  const handleShow = (modalInfo: modalShowType) => setModalShow(modalInfo);

  useEffect(() => {
    if (carouselStatus === 'idle' && isSuccess && data) {
      fetchAllQuestions(data);
    }

    if (!result.isUninitialized && result.isSuccess) {
      fetchAllQuestions(result.data);
    }
  }, [carouselStatus, data, isSuccess, players, fetchAllQuestions, result]);

  const GamePlayInnerContent = () => (
    <>
      <LeftCurve />
      <RightCurve />
      <GameHeader handleShow={() => handleShow({show: true, modalType: 'H'})} />
      <Questions moveAnimation={moveAnimation} isLoading={isFetching} />
      <GameFooter handleShow={() => handleShow({show: true, modalType: 'P'})} />
      <GameModal
        trigger={trigger}
        handleShow={() => handleShow({show: false, modalType: ''})}
        modalShow={modalShow}
      />
      <Carousel moveAnimation={moveAnimation} />
    </>
  );
  return (
    <QuestionWrapper>{data ? <GamePlayInnerContent /> : null}</QuestionWrapper>
  );
};
