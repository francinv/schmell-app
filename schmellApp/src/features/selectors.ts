import {RootState} from '../services/store';

export const selectPlayers = (state: RootState) => state.gamesetting.players;
export const selectTeams = (state: RootState) => state.gamesetting.teams;
export const selectReadOut = (state: RootState) => state.gamesetting.readOut;
export const selectLastPlayer = (state: RootState) =>
  state.gamesetting.lastPlayer;

export const selectedGame = (state: RootState) => state.game.selectedGameId;
export const selectedWeekId = (state: RootState) => state.game.selectedWeekId;
export const selectQuestions = (state: RootState) => state.game.questionList;

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
  state.gamePlay.firstQuestionId;
export const selectIsLast = (state: RootState) =>
  state.gamePlay.currentQuestionIndex + 1 > state.gamePlay.questionList.length;
export const selectCurrentQuestion = (state: RootState) =>
  state.gamePlay.questionList[state.gamePlay.currentQuestionIndex];
