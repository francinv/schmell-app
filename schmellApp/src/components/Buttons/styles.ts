import {StyleSheet} from 'react-native';

const buttonStyles = StyleSheet.create({
  iconButton: {
    borderRadius: 8,
  },
  widthSmall: {width: '60%'},
  btnSmall: {
    height: 40,
    backgroundColor: '#FFD700',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  widthMedium: {width: '75%'},
  btnMedium: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 60,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
    width: '100%',
  },
  widthLarge: {width: '90%'},
  btnLarge: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 70,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
    width: '100%',
  },
  textSmall: {
    fontSize: 22,
    fontFamily: 'CCBiffBamBoomW00-Regular',
    textAlign: 'center',
    color: '#141400',
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
  },
  textMedium: {
    fontSize: 26,
    fontFamily: 'CCBiffBamBoomW00-Regular',
    textAlign: 'center',
    color: '#141400',
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
  },
  textLarge: {
    fontSize: 30,
    fontFamily: 'CCBiffBamBoomW00-Regular',
    textAlign: 'center',
    color: '#141400',
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
  },
  btnShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.75,
    shadowOffset: {width: 6, height: 6},
    shadowRadius: 6,
  },
  selectText: {
    fontSize: 40,
  },
});

export default buttonStyles;
