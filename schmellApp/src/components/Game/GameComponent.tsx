import React, {FC, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import layoutStyles from '../../styles/layout.styles';
import {useSelector} from 'react-redux';
import {selectReadOut, selectVolume} from '../../features/selectors';
import {formatVolume} from '../../utils/formatVolume';

const GameComponent: FC = () => {
  const wantReadOut = useSelector(selectReadOut);
  const volume = useSelector(selectVolume);

  useEffect(() => {
    if (wantReadOut) {
      console.log(`Volume: ${formatVolume(volume)}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={layoutStyles.flex_1}>
      <Text>Spill</Text>
    </SafeAreaView>
  );
};

export default GameComponent;
