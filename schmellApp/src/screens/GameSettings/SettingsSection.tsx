import React, {Dispatch, FC, SetStateAction} from 'react';
import {View} from 'react-native';
import Megaphone from '../../assets/icons/Megaphone';
import UsersIcon from '../../assets/icons/UsersIcon';
import IconButton from '../../components/Buttons/IconButton';
import {settingsStateType} from '../../typings/common';
import ReadOut from './ReadOut';
import gameSettingStyles from './style';
import Teams from './Teams';

interface SettingsSectionProps {
  state: settingsStateType;
  setState: Dispatch<SetStateAction<settingsStateType>>;
}

const SettingsSection: FC<SettingsSectionProps> = ({state, setState}) => {
  const {show, wantedSettings} = state;

  const selected = (type: string) => wantedSettings === type;
  const content = selected('ReadOut') ? <ReadOut /> : <Teams />;

  const handlePress = (type: '' | 'ReadOut' | 'Teams') => {
    setState({
      show: selected(type) ? false : true,
      wantedSettings: selected(type) ? '' : type,
    });
  };

  const colorStyles = {
    backgroundColor: 'rgba(20, 20, 0, 0.3)',
  };

  return (
    <>
      <View style={gameSettingStyles.buttonContainer}>
        <IconButton
          handlePress={() => handlePress('ReadOut')}
          additionalStyling={[selected('ReadOut') ? colorStyles : null]}>
          <Megaphone />
        </IconButton>
        <IconButton
          handlePress={() => handlePress('Teams')}
          additionalStyling={[selected('Teams') ? colorStyles : null]}>
          <UsersIcon />
        </IconButton>
      </View>
      {show ? content : null}
    </>
  );
};

export default SettingsSection;
