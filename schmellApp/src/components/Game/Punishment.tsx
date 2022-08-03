import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import CocktailIcon from '../../assets/icons/CocktailIcon';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import {questionType} from '../../typings/questionTypes';

interface PunishmentProps {
  currentQuestion: questionType;
}

const Punishment: FC<PunishmentProps> = ({currentQuestion}) => {
  const [arrayOfCups, setArrayOfCups] = useState<JSX.Element[]>([]);
  const medianOfArray = arrayOfCups.length / 2;
  const isSvv = currentQuestion?.type === 'Skal vi vedde?';

  useEffect(() => {
    let temporaryArrayOfCups = [];
    for (let i = 0; i < currentQuestion?.punishment; i++) {
      temporaryArrayOfCups.push(
        <CocktailIcon key={i} color={isSvv ? '#262423' : 'gold'} />,
      );
    }
    setArrayOfCups(temporaryArrayOfCups);
  }, [currentQuestion?.punishment, isSvv]);

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
        <View
          style={[
            layoutStyles.flex_row,
            layoutStyles.flex_center,
            arrayOfCups.length === 1 ? marginStyles.mr_auto : null,
          ]}>
          {arrayOfCups.map(cup => cup)}
        </View>
      )}
    </>
  );
};

export default Punishment;
