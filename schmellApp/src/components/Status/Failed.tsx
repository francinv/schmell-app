import React, {FC} from 'react';
import {selectLanguage} from '../../features/selectors';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import HomeWrapper from '../Wrappers/HomeWrapper';
import useLocale from '../../hooks/useLocale';
import SchmellButton from '../Buttons/SchmellButton';
import RetryIcon from '../../assets/icons/RetryIcon';

interface FailedProps {
  refetch: () => void;
}

const Failed: FC<FailedProps> = ({refetch}) => {
  const lang = useSelector(selectLanguage);

  return (
    <HomeWrapper>
      <View style={failedStyle.container}>
        <Text style={[failedStyle.text, failedStyle.pre]}>
          {useLocale(lang, 'FAILED_PRE')}
        </Text>
        <Text style={[failedStyle.text, failedStyle.content]}>
          {useLocale(lang, 'FAILED_CONTENT')}
        </Text>
      </View>
      <SchmellButton
        content={useLocale(lang, 'RETRY') as string}
        handlePress={refetch}
        type="S"
        wantShadow={true}
        endIcon={<RetryIcon />}
      />
    </HomeWrapper>
  );
};

const failedStyle = StyleSheet.create({
  container: {width: '85%'},
  text: {
    fontFamily: 'CCBiffBamBoomW00-Regular',
    textAlign: 'center',
    color: '#FFD700',
  },
  pre: {
    fontSize: 50,
    paddingHorizontal: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
  content: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default Failed;
