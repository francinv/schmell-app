import {LANGUAGE_KEY, SHOW_DETAIL_KEY, VOICE_KEY} from '../constants/common';
import {asyncStorageService} from '../services/asyncStorageService';

const checkIfSettingsSet = async () => {
  const showDetailValue = await asyncStorageService(SHOW_DETAIL_KEY, 'GET');
  const voiceValue = await asyncStorageService(VOICE_KEY, 'GET');
  const languageValue = await asyncStorageService(LANGUAGE_KEY, 'GET');
  return {
    voice: voiceValue || 'M',
    language: languageValue || 'nb-NO',
    showDetail: showDetailValue || [],
  };
};

export default checkIfSettingsSet;
