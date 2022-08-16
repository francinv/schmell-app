import {StyleSheet} from 'react-native';

const gameSettingStyles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
  },
  settingsContainer: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(159, 162, 180, 0.2)',
  },
  textContainer: {
    height: 40,
    width: '45%',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: 'rgba(159, 162, 180, 0.2)',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    maxWidth: '80%',
    fontFamily: 'CCBiffBamBoomW00-Regular',
    color: '#FFFFFF',
    paddingHorizontal: 5,
  },
  playerContainer: {
    marginTop: 15,
    flex: 1,
  },
  playerContent: {
    justifyContent: 'space-evenly',
  },
  contentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentRowWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPlayer: {
    fontSize: 20,
    opacity: 0.5,
    color: '#FFFFFF',
    fontFamily: 'CCBiffBamBoomW00-Regular',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  settingsInner: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  settingsInnerTitle: {
    fontSize: 25,
    marginBottom: 20,
    fontFamily: 'CCBiffBamBoomW00-Regular',
    color: '#FFFFFF',
  },
  settingsInnerInputContainer: {
    width: '70%',
    borderRadius: 100,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(20, 20, 0, 0.3)',
  },
  linearGradientContainer: {
    width: '99%',
    height: '90%',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedText: {
    color: '#141400',
    textAlign: 'center',
    padding: 2,
    fontFamily: 'CCBiffBamBoomW00-Regular',
  },
  nonSelectedContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nonSelectedText: {
    textAlign: 'center',
    padding: 2,
    color: '#FFFFFF',
    fontFamily: 'CCBiffBamBoomW00-Regular',
  },
});

export default gameSettingStyles;
