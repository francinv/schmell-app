import React, {FC} from 'react';
import {View} from 'react-native';
import CocktailIcon from '../../assets/icons/CocktailIcon';
import layoutStyles from '../../styles/layout.styles';

interface PunishmentProps {
  punishment: number;
}

const Punishment: FC<PunishmentProps> = ({punishment}) => {
  const buildElements = () => {
    let arrayOfCups = [];
    for (let i = 0; i < punishment; i++) {
      arrayOfCups.push(<CocktailIcon key={i} />);
    }
    return arrayOfCups;
  };

  return (
    <View style={[layoutStyles.flex_row, layoutStyles.flex_center]}>
      {buildElements().map(cup => cup)}
    </View>
  );
};

export default Punishment;
