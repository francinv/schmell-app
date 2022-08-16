import {StyleSheet} from 'react-native';

const modalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '60%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default modalStyles;
