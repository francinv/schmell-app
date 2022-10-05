import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import CocktailIcon from '../../assets/icons/CocktailIcon';
import {question} from '../../types/question';
import gamePlayStyles from './style';

interface PunishmentProps {
  currentQuestion: question;
}

const Punishment: FC<PunishmentProps> = ({currentQuestion}) => {
  const [arrayOfCups, setArrayOfCups] = useState<JSX.Element[]>([]);

  const medianOfArray = arrayOfCups.length / 2;
  const isSkalViVedde = currentQuestion?.type === 'Skal vi vedde?';
  const isOnlyOneElement = arrayOfCups.length === 1;

  useEffect(() => {
    let temporaryArrayOfCups = [];
    for (let i = 0; i < currentQuestion?.punishment; i++) {
      temporaryArrayOfCups.push(
        <CocktailIcon key={i} color={isSkalViVedde ? '#262423' : 'gold'} />,
      );
    }
    setArrayOfCups(temporaryArrayOfCups);
  }, [currentQuestion?.punishment, isSkalViVedde]);

  return (
    <>
      {arrayOfCups.length > 4 ? (
        <View style={gamePlayStyles.punishmentContainerFlex}>
          <View style={gamePlayStyles.punishmentInner}>
            {arrayOfCups.slice(0, medianOfArray).map(cup => cup)}
          </View>
          <View style={gamePlayStyles.punishmentInner}>
            {arrayOfCups
              .slice(medianOfArray, arrayOfCups.length)
              .map(cup => cup)}
          </View>
        </View>
      ) : (
        <View
          style={[
            gamePlayStyles.punishmentInner,
            // eslint-disable-next-line react-native/no-inline-styles
            {marginRight: isOnlyOneElement ? 'auto' : 0},
          ]}>
          {arrayOfCups.map(cup => cup)}
        </View>
      )}
    </>
  );
};

export default Punishment;
