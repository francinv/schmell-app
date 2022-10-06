import {StyleSheet} from 'react-native';

const gamePlayStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  questionContainer: {
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
    fontSize: 42,
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 4,
    paddingLeft: 5,
    paddingRight: 5,
    width: '100%',
    textAlign: 'center',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
    zIndex: -50,
    paddingBottom: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
    left: 0,
  },
  carouselPrev: {
    flex: 1,
    position: 'relative',
  },
  carouselNext: {
    flex: 1,
    position: 'relative',
  },
  modalButton: {
    top: 5,
    right: 5,
    position: 'absolute',
  },
});

export default gamePlayStyles;
