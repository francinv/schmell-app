import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import CocktailIcon from '../../assets/icons/CocktailIcon';
import layoutStyles from '../../styles/layout.styles';

interface PunishmentProps {
  punishment: number;
}

const Punishment: FC<PunishmentProps> = ({punishment}) => {
  const [arrayOfCups, setArrayOfCups] = useState<JSX.Element[]>([]);
  const medianOfArray = arrayOfCups.length / 2;

  useEffect(() => {
    let temporaryArrayOfCups = [];
    for (let i = 0; i < punishment; i++) {
      temporaryArrayOfCups.push(<CocktailIcon key={i} />);
    }
    setArrayOfCups(temporaryArrayOfCups);
  }, [punishment]);

  return (
    <>
      {arrayOfCups.length > 4 ? (
        <View style={[layoutStyles.flex_center]}>
          <View style={[layoutStyles.flex_row, layoutStyles.flex_center]}>
            {arrayOfCups.slice(0, medianOfArray).map(cup => cup)}
          </View>
          <View style={[layoutStyles.flex_row, layoutStyles.flex_center]}>
            {arrayOfCups
              .slice(medianOfArray, arrayOfCups.length)
              .map(cup => cup)}
          </View>
        </View>
      ) : (
        <View style={[layoutStyles.flex_row, layoutStyles.flex_center]}>
          {arrayOfCups.map(cup => cup)}
        </View>
      )}
    </>
  );
};

export default Punishment;
