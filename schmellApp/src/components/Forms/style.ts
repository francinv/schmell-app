import {StyleSheet} from 'react-native';

const formStyles = StyleSheet.create({
  checkBox: {
    width: 35,
    height: 35,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(20, 20, 0, 0.3)',
  },
  textInput: {
    height: 45,
    width: '80%',
    borderRadius: 4,
    fontFamily: 'Artifika-Regular',
    fontSize: 20,
    color: '#FFFFFF',
    backgroundColor: 'rgba(20, 20, 0, 0.3)',
    paddingHorizontal: 5,
  },
  playerInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default formStyles;
