import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import SelectButton from '../../components/Buttons/SelectButton';
import SubTitle from '../../components/Styled/SubTitle';
import InputContainer from '../../components/Wrappers/InputContainer';
import {useAppDispatch} from '../../features/hooks';
import {selectLanguage, selectVoice} from '../../features/selectors';
import {postVoice} from '../../features/usersettings/userSettingSlice';
import useLocale from '../../hooks/useLocale';
import settingStyles from './style';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setVoice: (query: string) => dispatch(postVoice(query)),
});

export default () => {
  const voice = useSelector(selectVoice);
  const language = useSelector(selectLanguage);

  const {setVoice} = actionDispatch(useAppDispatch());

  return (
    <InputContainer>
      <SubTitle title={useLocale(language, 'SETTINGS_VOICE') as string} />
      <View style={settingStyles.settingsFormContainer}>
        <SelectButton
          content={voice === 'F' ? '🙋‍♀️' : '🙍‍♀️'}
          handlePress={() => setVoice('F')}
          selected={voice === 'F'}
        />
        <View style={settingStyles.divider} />
        <SelectButton
          content={voice === 'M' ? '🙋‍♂️' : '🙎‍♂️'}
          handlePress={() => setVoice('M')}
          selected={voice === 'M' ? true : false}
        />
      </View>
    </InputContainer>
  );
};
