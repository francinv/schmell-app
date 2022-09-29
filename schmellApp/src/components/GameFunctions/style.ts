import {StyleSheet} from 'react-native';

const gameFunctionStyles = StyleSheet.create({
  simpleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    zIndex: 100,
    fontFamily: 'Quicksand-Regular',
  },
  countDownText: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'CCBiffBamBoomW00-Regular',
    padding: 3,
    zIndex: 100,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    color: '#FFFFFF',
  },
  countDownContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 7.5,
    borderRadius: 10,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgba(159, 162, 180, 0.2)',
  },
  countDownButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#262423',
    marginTop: 5,
  },
  cardShowContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    zIndex: 100,
    marginTop: 16,
    padding: 16,
    minHeight: 120,
    backgroundColor: 'rgba(20, 20, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.75,
    shadowOffset: {width: 6, height: 6},
    shadowRadius: 6,
  },
  customButtonStyling: {
    marginTop: 16,
  },
  largerSimpleText: {
    fontSize: 26,
  },
  smallerSimpleText: {
    fontSize: 14,
  },
  multiShowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    minWidth: '100%',
    flex: 1,
  },
});

export default gameFunctionStyles;
