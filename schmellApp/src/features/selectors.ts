import {RootState} from '../services/store';

export const selectPlayers = (state: RootState) => state.gamesetting.players;
export const selectTeams = (state: RootState) => state.gamesetting.teams;
export const selectReadOut = (state: RootState) => state.gamesetting.readOut;
export const selectLastPlayer = (state: RootState) =>
  state.gamesetting.lastPlayer;

export const selectUserStatus = (state: RootState) => state.usersetting.status;
export const selectUserError = (state: RootState) => state.usersetting.error;
export const selectVoice = (state: RootState) => state.usersetting.voice;
export const selectLanguage = (state: RootState) => state.usersetting.language;
export const selectGameDetail = (state: RootState) =>
  state.usersetting.showDetail;

export const selectGamePlayQuestions = (state: RootState) =>
  state.gamePlay.questionList;
export const selectPlayStatus = (state: RootState) => state.gamePlay.status;
export const selectCurrentQuestionIndex = (state: RootState) =>
  state.gamePlay.currentQuestionIndex;
export const selectFirstQuestionId = (state: RootState) =>
  state.gamePlay.questionList[0]?.id;
export const selectIsLast = (state: RootState) =>
  state.gamePlay.currentQuestionIndex + 1 > state.gamePlay.questionList.length;
export const selectCurrentQuestion = (state: RootState) =>
  state.gamePlay.questionList[state.gamePlay.currentQuestionIndex];
export const selectInnerGamePlayList = (state: RootState) =>
  state.gamePlay.innerGamePlayList;
export const selectInnerGameIndex = (state: RootState) =>
  state.gamePlay.innerGamePlayIndex;
export const selectInnerGameCurrentElement = (state: RootState) =>
  state.gamePlay.innerGamePlayList[state.gamePlay.innerGamePlayIndex];
export const selectIsLastInnerGame = (state: RootState) =>
  state.gamePlay.innerGamePlayIndex + 1 >
  state.gamePlay.innerGamePlayList.length;
export const selectIsDeckCardDisabled = (state: RootState) =>
  state.gamePlay.isDeckCardDisabled;
export const selectDeckCardRandomNumber = (state: RootState) =>
  state.gamePlay.randomNumber;
export const selectIsDeckCardShown = (state: RootState) =>
  state.gamePlay.isDeckCardShow;
