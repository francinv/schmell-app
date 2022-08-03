import en from '../locale/en';
import no from '../locale/no';
import se from '../locale/se';
import de from '../locale/de';

type allowedAttribute =
  | 'LOADING'
  | 'FAILED_PRE'
  | 'FAILED_CONTENT'
  | 'RETRY'
  | 'STORE'
  | 'SETTINGS'
  | 'SETTINGS_VOLUME'
  | 'SETTINGS_VOICE'
  | 'SETTINGS_LANGUAGE'
  | 'SETTINGS_C2A'
  | 'GAME_DETAIL'
  | 'GAME_DETAIL_GO'
  | 'GAMESETTINGS_NO_PLAYERS'
  | 'PLAYER_INPUT_PLACEHOLDER'
  | 'GAMESETTINGS_TEAMS'
  | 'GAMESETTINGS_TEAMS_OPTIONS'
  | 'GAMESETTINGS_READOUT'
  | 'GAMESETTINGS_READOUT_OPTIONS'
  | 'GAMESETTINGS_START'
  | 'GAME_PLAYER_INPUT'
  | 'GAME_END_TITLE'
  | 'GAME_END_INFORMATION'
  | 'GAME_HINT_INFORMATION'
  | 'GAME_LOADING_INFORMATION'
  | 'GAME_LOADING_TITLE';

function useLocale(wantedLanguage: string, wantedAttribute: allowedAttribute) {
  switch (wantedLanguage) {
    case 'nb-NO':
      return no[wantedAttribute];
    case 'en-GB':
      return en[wantedAttribute];
    case 'sv-SE':
      return se[wantedAttribute];
    case 'da-DA':
      return de[wantedAttribute];
    default:
      return no[wantedAttribute];
  }
}

export default useLocale;
