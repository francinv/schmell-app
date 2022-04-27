import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  outerContainer: {
    height: 95,
    backgroundColor: 'rgba(159, 162, 180, 0.2)',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    width: 240,
    height: 55,
  },
});

export default styles;
