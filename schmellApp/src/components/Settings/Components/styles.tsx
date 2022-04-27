import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  volumeText: {
    fontSize: 25,
    backgroundColor: '#FFD700',
    borderRadius: 8,
    color: '#141400',
    fontFamily: 'Quicksand-Regular',
  },
  volumeTextContainer: {
    marginLeft: 14,
    marginRight: 14,
    backgroundColor: '#FFD700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 40,
    height: 40,
  },
  divider: {
    borderColor: '#FFD700',
    borderWidth: 1,
    // transform: [{rotate: '-90deg'}],
    height: '100%',
    marginLeft: 22,
    marginRight: 22,
  },
  emoji: {
    fontSize: 40,
  },
});

export default styles;
