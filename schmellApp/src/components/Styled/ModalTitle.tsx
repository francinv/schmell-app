import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

interface TitleProps {
  title: string;
}

const ModalTitle: FC<TitleProps> = ({title}) => (
  <Text style={styles.title}>{title}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    padding: 5,
    textAlign: 'center',
    color: '#141400',
    fontFamily: 'CCBiffBamBoomW00-Regular',
  },
});

export default ModalTitle;
