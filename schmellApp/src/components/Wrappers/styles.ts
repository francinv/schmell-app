import {StyleSheet} from 'react-native';

export const layoutStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#262423',
    flex: 1,
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  innerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    widht: '90%',
    flex: 1,
  },
  scrollContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginVertical: 'auto',
    width: '90%',
    marginTop: 30,
    display: 'flex',
  },
  questionContainer: {
    flex: 1,
    backgroundColor: '#262423',
  },
});
