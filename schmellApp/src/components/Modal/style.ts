import {StyleSheet} from 'react-native';

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '70%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default modalStyles;
