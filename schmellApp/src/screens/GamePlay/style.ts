import {StyleSheet} from 'react-native';

const gamePlayStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  questionContainer: {
    margin: 'auto',
    maxWidth: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
  },
  questionText: {
    color: '#FFFFFF',
    fontFamily: 'CCBiffBamBoomW00-Regular',
    fontSize: 45,
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    textAlign: 'center',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  punishmentContainerFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  punishmentInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContentContainer: {
    padding: 10,
  },
  hintContent: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
    color: '#141400',
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: '80%',
  },
  carouselContainer: {
    position: 'absolute',
    top: 60,
    bottom: 80,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    zIndex: -100,
    left: 0,
  },
  carouselPrev: {
    flex: 1,
    zIndex: 1,
    position: 'relative',
  },
  carouselNext: {
    flex: 1,
    zIndex: 1,
    position: 'relative',
  },
  modalButton: {
    top: 5,
    right: 5,
    position: 'absolute',
  },
});

export default gamePlayStyles;
