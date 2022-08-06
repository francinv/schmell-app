import {RootState} from '../services/store';

export const selectPlayers = (state: RootState) => state.gamesetting.players;
export const selectTeams = (state: RootState) => state.gamesetting.teams;
export const selectReadOut = (state: RootState) => state.gamesetting.readOut;
export const selectLastPlayer = (state: RootState) =>
  state.gamesetting.lastPlayer;
export const selectGames = (state: RootState) => state.game.games;
export const selectGameError = (state: RootState) => state.game.error;
export const selectGameStatus = (state: RootState) => state.game.status;
export const selectQuestions = (state: RootState) => state.game.questions;
export const selectWeeks = (state: RootState) => state.game.week;
export const selectedGame = (state: RootState) => state.game.selectedGame;
export const selectUserStatus = (state: RootState) => state.usersetting.status;
export const selectUserError = (state: RootState) => state.usersetting.error;
export const selectVoice = (state: RootState) => state.usersetting.voice;
export const selectVolume = (state: RootState) => state.usersetting.volume;
export const selectLanguage = (state: RootState) => state.usersetting.language;
export const selectGameDetail = (state: RootState) =>
  state.usersetting.showDetail;
