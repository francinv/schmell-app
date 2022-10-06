import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import {PostDetailShow} from '../types/api';
import {question} from '../types/question';
import {
  setIndex,
  setInnerGameIndex,
  setInnerGamePlayList,
  setIsDeckCardDisabled,
  setIsDeckCardShow,
  setQuestions,
  setRandomNumber,
} from './gameplay/gamePlaySlice';
import {
  addPlayers,
  removePlayer,
  setReadOut,
  setTeams,
} from './gamesettings/gameSettingSlice';
import {
  postDetail,
  postLanguage,
  postVoice,
} from './usersettings/userSettingSlice';

const actionDispatch = (dispatch: Dispatch<AnyAction>) => ({
  addPlayer: (query: string) => dispatch(addPlayers(query)),
  setCurrentIndex: (index: number) => dispatch(setIndex(index)),
  setInnerCarousel: (challenges: string[] | number[]) =>
    dispatch(setInnerGamePlayList(challenges)),
  setInnerIndex: (index: number) => dispatch(setInnerGameIndex(index)),
  setGamePlayQuestions: (questions: question[]) =>
    dispatch(setQuestions(questions)),
  removeFromList: (query: number) => dispatch(removePlayer(query)),
  readOut: (query: boolean) => dispatch(setReadOut(query)),
  editTeams: (query: number) => dispatch(setTeams(query)),
  setRandom: (query: number) => dispatch(setRandomNumber(query)),
  setDisabled: (query: boolean) => dispatch(setIsDeckCardDisabled(query)),
  setIsShown: (query: boolean) => dispatch(setIsDeckCardShow(query)),
});

export const apiDispatch = (dispatch: Dispatch<any>) => ({
  setDetailShow: (query: PostDetailShow) => dispatch(postDetail(query)),
  setLanguage: (query: string) => dispatch(postLanguage(query)),
  setVoice: (query: string) => dispatch(postVoice(query)),
});

export default actionDispatch;
