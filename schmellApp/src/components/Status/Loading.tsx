/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import {selectLanguage} from '../../features/selectors';
import {useSelector} from 'react-redux';
import loadingAnimation from '../../animations/loadingAnimation';
import HomeWrapper from '../Wrappers/HomeWrapper';
import BombIcon from '../../assets/icons/BombIcon';
import useLocale from '../../hooks/useLocale';

export default () => {
  const [opacityAnimated] = useState(new Animated.Value(0));
  const lang = useSelector(selectLanguage);

  useEffect(() => {
    loadingAnimation(opacityAnimated);
  }, []);

  return (
    <HomeWrapper>
      <Animated.View style={[{opacity: opacityAnimated}]}>
        <BombIcon />
      </Animated.View>
      <Text style={loadingStyle.text}>{useLocale(lang, 'LOADING')}</Text>
    </HomeWrapper>
  );
};

const loadingStyle = StyleSheet.create({
  text: {
    fontSize: 40,
    fontFamily: 'CCBiffBamBoomW00-Regular',
    textAlign: 'center',
    color: '#FFD700',
    marginTop: 10,
  },
});
