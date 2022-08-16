import {StyleSheet} from 'react-native';

const settingStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
  },
  settingsTitle: {
    fontFamily: 'CCBiffBamBoomW00-Regular',
    fontSize: 30,
    color: '#FFD700',
    marginHorizontal: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    width: '90%',
    paddingLeft: 5,
    marginTop: 15,
  },
  settingsFormContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  divider: {
    borderColor: '#FFD700',
    borderWidth: 1,
    height: '100%',
    marginLeft: 22,
    marginRight: 22,
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});

export default settingStyles;
