import React, {Dispatch, FC, SetStateAction} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Megaphone from '../../assets/icons/Megaphone';
import UsersIcon from '../../assets/icons/UsersIcon';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import layoutStyles from '../../styles/layout.styles';
import paddingStyles from '../../styles/padding.styles';
import ReadOut from './ReadOut';
import TeamComponent from './TeamComponent';

export type settingsState = {
  wantedSettings: 'ReadOut' | 'Teams' | '';
  show: boolean;
};

interface SettingsProps {
  state: settingsState;
  setState: Dispatch<SetStateAction<settingsState>>;
}
const SettingsSection: FC<SettingsProps> = ({state, setState}) => {
  const {wantedSettings, show} = state;

  const selected = (type: string) => wantedSettings === type;

  const handlePress = (type: '' | 'ReadOut' | 'Teams') => {
    if (selected(type)) {
      setState({
        show: false,
        wantedSettings: '',
      });
    } else {
      setState({
        show: true,
        wantedSettings: type,
      });
    }
  };

  const content = selected('ReadOut') ? <ReadOut /> : <TeamComponent />;

  return (
    <View>
      <View
        style={[
          layoutStyles.flex_row,
          layoutStyles.align_center,
          layoutStyles.justify_space,
          paddingStyles.p_5,
        ]}>
        <TouchableOpacity
          onPress={() => handlePress('ReadOut')}
          style={[
            selected('ReadOut') ? colorStyles.bg_senary : null,
            globalStyles.border_radius_8,
          ]}>
          <Megaphone />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress('Teams')}
          style={[
            selected('Teams') ? colorStyles.bg_senary : null,
            globalStyles.border_radius_8,
          ]}>
          <UsersIcon />
        </TouchableOpacity>
      </View>
      <View>{show ? content : null}</View>
    </View>
  );
};

export default SettingsSection;
